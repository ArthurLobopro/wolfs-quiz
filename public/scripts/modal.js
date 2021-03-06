const modal = document.querySelector('.modal-wrapper')
const cancelButton = document.querySelector('.modal .cancel')

const modalTitle = document.querySelector('.modal h2')
const modalMessage = document.querySelector('.modal p')
const modalMainButton = document.querySelector('.modal button')

const Modal = {
    changeDelete(){
        modalTitle.innerText = 'Excluir Pergunta'
        modalMessage.innerText = 'Tem certeza que deseja excluir essa pergunta?'
        modalMainButton.innerText = 'Sim, excluir'
        if(!modalMainButton.classList.contains('delete')){
            modalMainButton.classList.add('delete')
        }
    },
    changeCheck(isRead){
        const str = isRead ? 'Desmarcar' : 'Marcar'
        modalTitle.innerText = `${str} como lida`
        modalMessage.innerText = `Deseja ${str.toLowerCase()} como lida?`
        modalMainButton.innerText = 'Sim'
    },
    showAndHide(){
        modal.classList.toggle('active')
    }
}

cancelButton.onclick = Modal.showAndHide

export default Modal