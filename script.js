$(document).ready(function () {
    function btns(){
        let colors=['#9D00FF','#FF0000','#00FF33','#099FFF','#FF00CC','#6E0DD0','#FF6600','#8ad4d4','#CC00FF']
        let btns=Array.from(document.getElementsByClassName('button'))
        let audios=Array.from(document.getElementsByTagName('audio'))
        let str='ASDFGHJKL'
        let keyPressArr=str.split('').map(char=>char.charCodeAt())
        
        for(let i=0;i<btns.length;i++){
            btns[i].style.background=colors[i]

            btns[i].addEventListener('mouseenter',e=>{
                btns[i].style.filter='brightness(0.9)'
            })

            btns[i].addEventListener('mouseleave',e=>{
                btns[i].style.filter='brightness(1)'
            })

            btns[i].addEventListener('click',e=>{
                audios[i].play()
            })

            document.addEventListener('keydown',e=>{
                if(e.keyCode==keyPressArr[i]){
                    audios[i].play()
                }
            })
        }
    }
    btns()
})