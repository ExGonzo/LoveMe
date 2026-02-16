// Data Management
class QAManager {
    constructor(storageKey = 'loveQuestions') {
        this.storageKey = storageKey;
        this.data = this.loadData();
    }

    loadData() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    saveData() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    addQA(question, answer) {
        const item = {
            id: Date.now(),
            question,
            answer,
            rating: 0,
            createdAt: new Date().toLocaleString()
        };
        this.data.unshift(item);
        this.saveData();
        return item;
    }

    updateQA(id, question, answer) {
        const item = this.data.find(i => i.id === id);
        if (item) {
            item.question = question;
            item.answer = answer;
            this.saveData();
        }
    }

    deleteQA(id) {
        this.data = this.data.filter(i => i.id !== id);
        this.saveData();
    }

    rateQA(id, rating) {
        const item = this.data.find(i => i.id === id);
        if (item) {
            item.rating = rating;
            this.saveData();
        }
    }

    getStats() {
        const total = this.data.length;
        const rated = this.data.filter(i => i.rating > 0);
        const avgRating = rated.length > 0 
            ? (this.data.reduce((sum, i) => sum + i.rating, 0) / rated.length).toFixed(1)
            : 0;
        const bestRating = this.data.length > 0 
            ? Math.max(...this.data.map(i => i.rating))
            : 0;

        return { total, avgRating, bestRating };
    }

    clearAll() {
        this.data = [];
        this.saveData();
    }
}

// UI Manager
class UIManager {
    constructor(qaManager) {
        this.qaManager = qaManager;
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.cacheElements();
        this.attachEventListeners();
        this.render();
    }

    cacheElements() {
        this.questionForm = document.getElementById('questionForm');
        this.questionInput = document.getElementById('questionInput');
        this.answerInput = document.getElementById('answerInput');
        this.qaContainer = document.getElementById('qaContainer');
        this.filterButtons = document.querySelectorAll('.filter-btn');
        this.clearDataBtn = document.getElementById('clearData');
        this.totalQuestionsEl = document.getElementById('totalQuestions');
        this.avgRatingEl = document.getElementById('avgRating');
        this.bestRatingEl = document.getElementById('bestRating');
        this.modal = document.getElementById('editModal');
        this.editForm = document.getElementById('editForm');
        this.editIdInput = document.getElementById('editId');
        this.editQuestionInput = document.getElementById('editQuestion');
        this.editAnswerInput = document.getElementById('editAnswer');
        this.closeBtn = document.querySelector('.close');
    }

    attachEventListeners() {
        // Form submission
        this.questionForm.addEventListener('submit', (e) => this.handleSubmit(e));

        // Filter buttons
        this.filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleFilter(e));
        });

        // Clear data
        this.clearDataBtn.addEventListener('click', () => this.handleClearData());

        // Modal
        this.closeBtn.addEventListener('click', () => this.closeModal());
        this.editForm.addEventListener('submit', (e) => this.handleEditSubmit(e));
        window.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const question = this.questionInput.value.trim();
        const answer = this.answerInput.value.trim();

        if (!question || !answer) {
            this.showNotification('Please fill in both fields! 💕', 'error');
            return;
        }

        this.qaManager.addQA(question, answer);
        this.questionInput.value = '';
        this.answerInput.value = '';
        this.render();
        this.showNotification('Question saved! 💖', 'success');
    }

    handleFilter(e) {
        this.filterButtons.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        this.currentFilter = e.target.dataset.filter;
        this.render();
    }

    handleClearData() {
        if (confirm('Are you sure you want to delete all questions and answers? ❤️\n\nThis action cannot be undone!')) {
            this.qaManager.clearAll();
            this.render();
            this.showNotification('All data cleared! 💔', 'success');
        }
    }

    handleEditSubmit(e) {
        e.preventDefault();
        const id = parseInt(this.editIdInput.value);
        const question = this.editQuestionInput.value.trim();
        const answer = this.editAnswerInput.value.trim();

        if (!question || !answer) {
            this.showNotification('Please fill in all fields!', 'error');
            return;
        }

        this.qaManager.updateQA(id, question, answer);
        this.closeModal();
        this.render();
        this.showNotification('Updated! 💕', 'success');
    }

    render() {
        this.renderQA();
        this.renderStats();
    }

    renderQA() {
        const filtered = this.getFilteredData();

        if (filtered.length === 0) {
            this.qaContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-heart-broken"></i>
                    <p>${this.getEmptyMessage()}</p>
                </div>
            `;
            return;
        }

        this.qaContainer.innerHTML = filtered.map(item => this.createQAElement(item)).join('');
        this.attachQAEventListeners();
    }

    createQAElement(item) {
        const starsHTML = this.createStarsHTML(item.id, item.rating);
        return `
            <div class="qa-item" data-id="${item.id}">
                <div class="qa-question">❓ ${this.escapeHtml(item.question)}</div>
                <div class="qa-answer">💭 ${this.escapeHtml(item.answer)}</div>
                <div class="qa-actions">
                    <button class="btn-small btn-edit" onclick="uiManager.openEditModal(${item.id})">
                        <i class="fas fa-edit"></i> Edit
                    </button>
                    <button class="btn-small btn-delete" onclick="uiManager.deleteQA(${item.id})">
                        <i class="fas fa-trash"></i> Delete
                    </button>
                </div>
                <div class="rating-section">
                    <div class="star-rating" id="rating-${item.id}">
                        ${starsHTML}
                    </div>
                    ${item.rating > 0 ? `<span class="rating-value">${item.rating}/5 ⭐</span>` : ''}
                </div>
            </div>
        `;
    }

    createStarsHTML(id, currentRating) {
        let html = '';
        for (let i = 1; i <= 5; i++) {
            html += `<span class="star ${i <= currentRating ? 'active' : ''}" 
                        data-rating="${i}" 
                        onclick="uiManager.rateQA(${id}, ${i})">★</span>`;
        }
        return html;
    }

    attachQAEventListeners() {
        const stars = document.querySelectorAll('.star');
        stars.forEach(star => {
            star.addEventListener('mouseover', function() {
                const rating = this.dataset.rating;
                const container = this.parentElement;
                container.querySelectorAll('.star').forEach((s, idx) => {
                    if (idx < rating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });

            star.addEventListener('mouseout', function() {
                const id = this.parentElement.id.split('-')[1];
                const currentRating = this.qaManager.data.find(i => i.id === parseInt(id))?.rating || 0;
                const container = this.parentElement;
                container.querySelectorAll('.star').forEach((s, idx) => {
                    if (idx < currentRating) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            }.bind(this));
        });
    }

    rateQA(id, rating) {
        this.qaManager.rateQA(id, rating);
        this.renderQA();
        this.renderStats();
        this.showNotification(`Rated ${rating} stars! 💕`, 'success');
    }

    deleteQA(id) {
        if (confirm('Delete this question? There\'s no going back... 💔')) {
            const item = this.qaContainer.querySelector(`[data-id="${id}"]`);
            item.classList.add('fade-out');
            setTimeout(() => {
                this.qaManager.deleteQA(id);
                this.render();
            }, 300);
        }
    }

    openEditModal(id) {
        const item = this.qaManager.data.find(i => i.id === id);
        if (item) {
            this.editIdInput.value = id;
            this.editQuestionInput.value = item.question;
            this.editAnswerInput.value = item.answer;
            this.modal.style.display = 'block';
        }
    }

    closeModal() {
        this.modal.style.display = 'none';
        this.editForm.reset();
    }

    renderStats() {
        const stats = this.qaManager.getStats();
        this.totalQuestionsEl.textContent = stats.total;
        this.avgRatingEl.textContent = stats.avgRating;
        this.bestRatingEl.textContent = stats.bestRating;
    }

    getFilteredData() {
        const data = this.qaManager.data;
        if (this.currentFilter === 'all') {
            return data;
        } else if (this.currentFilter === 'rated') {
            return data.filter(i => i.rating > 0);
        } else if (this.currentFilter === 'unrated') {
            return data.filter(i => i.rating === 0);
        }
        return data;
    }

    getEmptyMessage() {
        if (this.currentFilter === 'rated') {
            return 'No rated questions yet! Start rating! ⭐';
        } else if (this.currentFilter === 'unrated') {
            return 'No unrated questions! Rate them all! 💕';
        }
        return 'No questions yet! Ask me something! 💕';
    }

    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 15px 25px;
            background: ${type === 'success' ? '#a8d8ea' : '#ff6b6b'};
            color: white;
            border-radius: 12px;
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
            z-index: 999;
            animation: slideIn 0.3s ease-out;
            font-weight: 600;
            max-width: 300px;
            word-wrap: break-word;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'fadeOut 0.3s ease-out';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

// Initialize when DOM is ready
let qaManager;
let uiManager;

document.addEventListener('DOMContentLoaded', () => {
    // Use STORAGE_KEY if defined in the HTML file, otherwise use default
    const key = typeof STORAGE_KEY !== 'undefined' ? STORAGE_KEY : 'loveQuestions';
    qaManager = new QAManager(key);
    uiManager = new UIManager(qaManager);
});
