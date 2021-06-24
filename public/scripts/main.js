import Modal from "./modal.js"

const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach( check => {
    check.addEventListener( 'click', event => {
        const target = event.target
        const perguntas = document.querySelectorAll('.pergunta')
        
        perguntas.forEach( pergunta => {
            if(pergunta.contains(target)){
                const questionId = pergunta.dataset.id
                setFormAction(questionId,'check')
                Modal.changeCheck()
                Modal.showAndHide()
                // const checkButtonText = pergunta.querySelector('.check > span')
                // pergunta.classList.toggle('read')

                // if(pergunta.classList.contains('read')){
                //     checkButtonText.innerText = 'Lida'
                // }else{
                //     checkButtonText.innerText = 'Marcar como lida'
                // }

            }
        })
    } )
})

const deleteButtons = document.querySelectorAll('.actions a.delete')
console.log(deleteButtons);
deleteButtons.forEach( button => {
    button.addEventListener( 'click', event => {
        Modal.changeDelete()
        Modal.showAndHide()
        setFormAction()

        const target = event.target
        const perguntas = document.querySelectorAll('.pergunta')
        
        perguntas.forEach( pergunta => {
            if(pergunta.contains(target)){
                console.log(pergunta.dataset);
                const questionId = pergunta.dataset.id
                setFormAction(questionId,'delete')
            }
        })
    })
})

//Mexendo no form

const modalForm = document.querySelector('.modal form')

const setFormAction = (question, action) => {
    const room = document.getElementById('room-id').dataset.id
    modalForm.setAttribute('action', `/question/${room}/${question}/${action}`)
}