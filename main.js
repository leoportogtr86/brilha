var draw = SVG().addTo('body').size(400,600)
var synth = new Tone.Synth({oscillator: {type: 'sine'}}).toMaster()

let start = document.querySelector('#start')
let pad = document.querySelector('#pad')

let t = 10000

start.onclick = function(){
   
   start.style.display = 'none'
   pad.play()
   n1.animate(t).move(0,700)
}
let n1 = draw.rect(80,80).fill('red')
n1.radius(10)
n1.move(0, -100)

let n2 = draw.rect(80, 80).fill('red')
n2.radius(10)
n2.move(0, -100)

let n3 = draw.rect(80, 80).fill('#0080FF')
n3.radius(10)
n3.move(100, -100)

let n4 = draw.rect(80, 80).fill('#0080FF')
n4.radius(10)
n4.move(100, -100)

let n5 = draw.rect(80, 80).fill('darkblue')
n5.radius(10)
n5.move(150, -100)

let n6 = draw.rect(80, 80).fill('darkblue')
n6.radius(10)
n6.move(150, -100)

let n7 = draw.rect(80, 80).fill('#0080FF')
n7.radius(10)
n7.move(100, -100)



let n8 = draw.rect(80, 80).fill('#0080FF')
n8.radius(10)
n8.move(100, -100)

let n9 = draw.rect(80, 80).fill('green')
n9.radius(10)
n9.move(70, -100)

let n10 = draw.rect(80, 80).fill('green')
n10.radius(10)
n10.move(70, -100)

let n11 = draw.rect(80, 80).fill('yellow')
n11.radius(10)
n11.move(50, -100)

let n12 = draw.rect(80, 80).fill('yellow')
n12.radius(10)
n12.move(50, -100)

let n13 = draw.rect(80, 80).fill('orange')
n13.radius(10)
n13.move(30, -100)

let n14 = draw.rect(80, 80).fill('orange')
n14.radius(10)
n14.move(30, -100)

let n15 = draw.rect(80, 80).fill('red')
n15.radius(10)
n15.move(0, -100)



n1.click(()=>{
   
   window.navigator.vibrate(200)
   
   n1.hide()
   synth.triggerAttackRelease('C4', '4n')
   n2.animate(t).move(0,700)
})

n2.click(()=>{
   
   window.navigator.vibrate(200)
   
   n2.hide()
   synth.triggerAttackRelease('C4', '4n')
   n3.animate(t).move(100,700)
})

n3.click(() => {
   
   window.navigator.vibrate(200)

   n3.hide()
   synth.triggerAttackRelease('G4', '4n')
   n4.animate(t).move(100,700)
   
})

n4.click(() => {
   
   window.navigator.vibrate(200)

   n4.hide()
   synth.triggerAttackRelease('G4', '4n')
   n5.animate(t).move(100,700)
   
})

n5.click(() => {
   
   window.navigator.vibrate(200)

   n5.hide()
   synth.triggerAttackRelease('A4', '4n')
   n6.animate(t).move(100,700)
   

})

n6.click(() => {
   
   window.navigator.vibrate(200)

   n6.hide()
   synth.triggerAttackRelease('A4', '4n')
   n7.animate(t).move(100,700)


})

n7.click(() => {
   
   window.navigator.vibrate(200)

   n7.hide()
   synth.triggerAttackRelease('G4', '4n')
   n8.animate(t).move(100,700)
   


})

n8.click(() => {

   n8.hide()
   synth.triggerAttackRelease('G4', '4n')
   n9.animate(t).move(70,700)


})

n9.click(() => {

   n9.hide()
   synth.triggerAttackRelease('F4', '4n')
   n10.animate(t).move(70,700)


})

n10.click(() => {

   n10.hide()
   synth.triggerAttackRelease('F4', '4n')
   n11.animate(t).move(70,700)



})

n11.click(() => {

   n11.hide()
   synth.triggerAttackRelease('E4', '4n')
   n12.animate(t).move(70,700)



})

n12.click(() => {

   n12.hide()
   synth.triggerAttackRelease('E4', '4n')
   n13.animate(t).move(30,700)



})

n13.click(() => {

   n13.hide()
   synth.triggerAttackRelease('D4', '4n')
   n14.animate(t).move(30,700)



})

n14.click(() => {

   n14.hide()
   synth.triggerAttackRelease('D4', '4n')
   n15.animate(t).move(0,700)



})

n15.click(() => {

   n15.hide()
   synth.triggerAttackRelease('C4', '4n')



})