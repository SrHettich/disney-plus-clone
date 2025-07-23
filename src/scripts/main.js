document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            
            desativaElementos()
            
            botao.target.classList.add('shows__tabs__button--is-active')
            aba.classList.add('shows__list--is-active')
        })

        
    }


})

function desativaElementos(){
    const tabsContainer = document.querySelectorAll('[data-tab-id]')
    const buttons = document.querySelectorAll('[data-tab-button]')

    for(let i = 0; i < buttons.length; i++){
                buttons[i].classList.remove('shows__tabs__button--is-active')
            }

    for(let i = 0; i < tabsContainer.length; i++){
        tabsContainer[i].classList.remove('shows__list--is-active')
    }
}