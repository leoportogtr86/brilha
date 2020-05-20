var draw = SVG().addTo('body').size(400,600)
var synth = new Tone.Synth().toDestination()

let start = document.querySelector('#start')
let pad = document.querySelector('#pad')
let trofeu = document.querySelector('#trofeu')
let win = document.querySelector('#win')

let t = 15000

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


let n16 = draw.rect(80, 80).fill('#0080FF')
n16.radius(10)
n16.move(100, -100)

let n17 = draw.rect(80, 80).fill('#0080FF')
n17.radius(10)
n17.move(100, -100)


let n18 = draw.rect(80, 80).fill('green')
n18.radius(10)
n18.move(70, -100)


let n19 = draw.rect(80, 80).fill('green')
n19.radius(10)
n19.move(70, -100)


let n20 = draw.rect(80, 80).fill('yellow')
n20.radius(10)
n20.move(50, -100)


let n21 = draw.rect(80, 80).fill('yellow')
n21.radius(10)
n21.move(50, -100)



let n22 = draw.rect(80, 80).fill('orange')
n22.radius(10)
n22.move(20, -100)



let n23 = draw.rect(80, 80).fill('orange')
n23.radius(10)
n23.move(20, -100)



let n24 = draw.rect(80, 80).fill('#0080FF')
n24.radius(10)
n24.move(100, -100)

let n25 = draw.rect(80, 80).fill('#0080FF')
n25.radius(10)
n25.move(100, -100)


let n26 = draw.rect(80, 80).fill('green')
n26.radius(10)
n26.move(70, -100)


let n27 = draw.rect(80, 80).fill('green')
n27.radius(10)
n27.move(70, -100)


let n28 = draw.rect(80, 80).fill('yellow')
n28.radius(10)
n28.move(50, -100)


let n29 = draw.rect(80, 80).fill('yellow')
n29.radius(10)
n29.move(50, -100)



let n30 = draw.rect(80, 80).fill('orange')
n30.radius(10)
n30.move(20, -100)



let n31 = draw.rect(80, 80).fill('orange')
n31.radius(10)
n31.move(20, -100)


let n32 = draw.rect(80,80).fill('red')
n32.radius(10)
n32.move(0, -100)

let n33 = draw.rect(80, 80).fill('red')
n33.radius(10)
n33.move(0, -100)

let n34 = draw.rect(80, 80).fill('#0080FF')
n34.radius(10)
n34.move(100, -100)

let n35 = draw.rect(80, 80).fill('#0080FF')
n35.radius(10)
n35.move(100, -100)

let n36 = draw.rect(80, 80).fill('darkblue')
n36.radius(10)
n36.move(150, -100)

let n37 = draw.rect(80, 80).fill('darkblue')
n37.radius(10)
n37.move(150, -100)

let n38 = draw.rect(80, 80).fill('#0080FF')
n38.radius(10)
n38.move(100, -100)



let n39 = draw.rect(80, 80).fill('#0080FF')
n39.radius(10)
n39.move(100, -100)

let n40 = draw.rect(80, 80).fill('green')
n40.radius(10)
n40.move(70, -100)

let n41 = draw.rect(80, 80).fill('green')
n41.radius(10)
n41.move(70, -100)

let n42 = draw.rect(80, 80).fill('yellow')
n42.radius(10)
n42.move(50, -100)

let n43 = draw.rect(80, 80).fill('yellow')
n43.radius(10)
n43.move(50, -100)

let n44 = draw.rect(80, 80).fill('orange')
n44.radius(10)
n44.move(30, -100)

let n45 = draw.rect(80, 80).fill('orange')
n45.radius(10)
n45.move(30, -100)

let n46 = draw.rect(80, 80).fill('red')
n46.radius(10)
n46.move(0, -100)




n1.click(()=>{
   
   
   
   n1.hide()
   synth.triggerAttackRelease('C4', '4n')
   n2.animate(t).move(0,700)
})

n2.click(()=>{
   
   
   
   n2.hide()
   synth.triggerAttackRelease('C4', '4n')
   n3.animate(t).move(100,700)
})

n3.click(() => {
   
   

   n3.hide()
   synth.triggerAttackRelease('G4', '4n')
   n4.animate(t).move(100,700)
   
})

n4.click(() => {
   
   

   n4.hide()
   synth.triggerAttackRelease('G4', '4n')
   n5.animate(t).move(100,700)
   
})

n5.click(() => {
   
   

   n5.hide()
   synth.triggerAttackRelease('A4', '4n')
   n6.animate(t).move(100,700)
   

})

n6.click(() => {
   
   

   n6.hide()
   synth.triggerAttackRelease('A4', '4n')
   n7.animate(t).move(100,700)


})

n7.click(() => {
   
   

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
   n16.animate(t).move(0,700)




})



n16.click(() => {

   n16.hide()
   synth.triggerAttackRelease('G4', '4n')
   n17.animate(t).move(100,700)




})


n17.click(() => {

   n17.hide()
   synth.triggerAttackRelease('G4', '4n')
   n18.animate(t).move(100,700)




})


n18.click(() => {

   n18.hide()
   synth.triggerAttackRelease('F4', '4n')
   n19.animate(t).move(70,700)




})


n19.click(() => {

   n19.hide()
   synth.triggerAttackRelease('F4', '4n')
   n20.animate(t).move(70,700)




})


n20.click(() => {

   n20.hide()
   synth.triggerAttackRelease('E4', '4n')
   n21.animate(t).move(50,700)




})



n21.click(() => {

   n21.hide()
   synth.triggerAttackRelease('E4', '4n')
   n22.animate(t).move(50,700)




})


n22.click(() => {

   n22.hide()
   synth.triggerAttackRelease('D4', '4n')
   n23.animate(t).move(30,700)




})


n23.click(() => {

   n23.hide()
   synth.triggerAttackRelease('D4', '4n')
   n24.animate(t).move(30,700)




})


n24.click(() => {

   n24.hide()
   synth.triggerAttackRelease('G4', '4n')
   n25.animate(t).move(100,700)




})


n25.click(() => {

   n25.hide()
   synth.triggerAttackRelease('G4', '4n')
   n26.animate(t).move(100,700)




})


n26.click(() => {

   n26.hide()
   synth.triggerAttackRelease('F4', '4n')
   n27.animate(t).move(70,700)




})


n27.click(() => {

   n27.hide()
   synth.triggerAttackRelease('F4', '4n')
   n28.animate(t).move(70,700)




})


n28.click(() => {

   n28.hide()
   synth.triggerAttackRelease('E4', '4n')
   n29.animate(t).move(50,700)




})


n29.click(() => {

   n29.hide()
   synth.triggerAttackRelease('E4', '4n')
   n30.animate(t).move(50,700)




})


n30.click(() => {
   n30.hide()
   synth.triggerAttackRelease('D4', '4n')
   n31.animate(t).move(30,700)




})


n31.click(() => {

   n31.hide()
   synth.triggerAttackRelease('D4', '4n')
   n32.animate(t).move(30,700)




})



n32.click(()=>{
   
   
   
   n32.hide()
   synth.triggerAttackRelease('C4', '4n')
   n33.animate(t).move(0,700)
})

n33.click(()=>{
   
   
   
   n33.hide()
   synth.triggerAttackRelease('C4', '4n')
   n34.animate(t).move(100,700)
})

n34.click(() => {
   
   

   n34.hide()
   synth.triggerAttackRelease('G4', '4n')
   n35.animate(t).move(100,700)
   
})

n35.click(() => {
   
   

   n35.hide()
   synth.triggerAttackRelease('G4', '4n')
   n36.animate(t).move(100,700)
   
})

n36.click(() => {
   
   

   n36.hide()
   synth.triggerAttackRelease('A4', '4n')
   n37.animate(t).move(100,700)
   

})

n37.click(() => {
   
   

   n37.hide()
   synth.triggerAttackRelease('A4', '4n')
   n38.animate(t).move(100,700)


})

n38.click(() => {
   
   

   n38.hide()
   synth.triggerAttackRelease('G4', '4n')
   n39.animate(t).move(100,700)
   


})

n39.click(() => {

   n39.hide()
   synth.triggerAttackRelease('G4', '4n')
   n40.animate(t).move(70,700)


})

n40.click(() => {

   n40.hide()
   synth.triggerAttackRelease('F4', '4n')
   n41.animate(t).move(70,700)


})

n41.click(() => {

   n41.hide()
   synth.triggerAttackRelease('F4', '4n')
   n42.animate(t).move(70,700)



})

n42.click(() => {

   n42.hide()
   synth.triggerAttackRelease('E4', '4n')
   n43.animate(t).move(70,700)



})

n43.click(() => {

   n43.hide()
   synth.triggerAttackRelease('E4', '4n')
   n44.animate(t).move(30,700)



})

n44.click(() => {

   n44.hide()
   synth.triggerAttackRelease('D4', '4n')
   n45.animate(t).move(30,700)



})

n45.click(() => {

   n45.hide()
   synth.triggerAttackRelease('D4', '4n')
   n46.animate(t).move(0,700)



})

n46.click(() => {

   n46.hide()
   synth.triggerAttackRelease('C4', '4n')
   trofeu.style.display = 'block'
   win.play()
   pad.pause()




})


