document.addEventListener('DOMContentLoaded', function(){
    const buttons = document.querySelectorAll('[data-tab-button]')
    
    //Cabeçalho
    const hero = document.querySelector('.hero')
    const alturaHero = hero.clientHeight

    window.addEventListener('scroll', function(){
        const posicaoAtual = this.scrollY
        const cabecalho = document.querySelector('header')

        if(posicaoAtual <= alturaHero){
            cabecalho.classList.add('header--is-hidden')
        }
        else{
            cabecalho.classList.remove('header--is-hidden')
        }
    })

    // Seção de atrações
    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton
            const aba = document.querySelector(`[data-tab-id=${abaAlvo}]`)
            
            desativaElementos()
            
            botao.target.classList.add('shows__tabs__button--is-active')
            aba.classList.add('shows__list--is-active')
        })

        
    }


    // Seção de Perguntas frequentes
    const faqs = document.querySelectorAll('[data-faq-question]')

    for(let i = 0; i < faqs.length; i++){
        faqs[i].addEventListener('click', function(faq){
            faq.target.parentNode.classList.toggle('faq__questions__item--is-open')
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