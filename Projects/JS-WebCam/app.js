const webCamVideoElement = document.getElementById('video')

// window.navigator.mediaDevices.getUserMedia({
//     video: {
//         width: {
//             mix: 640,
//             max: 1280,
//         },
//         height: {
//             mix: 480,
//             max: 760,
//         }
//     }
// }).then((stream) => {
//     webCamVideoElement.srcObject = stream
// })

async function webCam() {
    let stream = null

    stream = await navigator.mediaDevices.getUserMedia({ video: true })
    webCamVideoElement.srcObject = stream
}

webCam()