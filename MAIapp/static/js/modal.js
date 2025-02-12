class ModalManager {
    constructor() {
        this.modals = new Map();
        this.activeModal = null;
        this.init();
    }

    init() {
        document.querySelectorAll('.modal').forEach(modal => {
            const modalId = modal.id;
            this.modals.set(modalId, {
                element: modal,
                content: modal.querySelector('.modal-content'),
                closeBtn: modal.querySelector('.close')
            });

            this.setupModalEvents(modalId);
        });

        this.setupGlobalEvents();
    }

    setupModalEvents(modalId) {
        const modal = this.modals.get(modalId);

        modal.closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.closeModal(modalId);
        });
        
        modal.element.addEventListener('click', (e) => {
            if (e.target === modal.element) {
                e.preventDefault();
                this.closeModal(modalId);
            }
        });

        // Prevenir que los clicks dentro del contenido afecten a la página
        modal.content.addEventListener('click', (e) => {
            e.stopPropagation();
        });
    }

    setupGlobalEvents() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.activeModal) {
                this.closeModal(this.activeModal);
            }
        });

        document.querySelectorAll('.service-card').forEach((card, index) => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal(`modal${index + 1}`);
            });
        });
    }

    openModal(modalId) {
        const modal = this.modals.get(modalId);
        if (!modal) return;

        modal.element.style.display = 'flex';
        requestAnimationFrame(() => {
            modal.element.classList.add('show');
        });

        this.activeModal = modalId;
    }

    closeModal(modalId) {
        const modal = this.modals.get(modalId);
        if (!modal) return;

        modal.element.classList.remove('show');

        setTimeout(() => {
            modal.element.style.display = 'none';
            this.activeModal = null;
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    window.modalManager = new ModalManager();
});
