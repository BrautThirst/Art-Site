function onload() {
    var fileNames = [
        'action lannah 2.png',
        'booette.png', 
        'wedding peach.png', 
        'soldier.png',
        '5_9_2018.png',
        'bad cat.png',
        'beepdoodle 1.png',
        'd succubus.png',
        'rumble girl 2.png'
]
    var imagesUl = document.getElementById("images-list")

    for (var index = 0; index < fileNames.length; index++){
         var newLi = document.createElement('li')
         var newImg = document.createElement('img')
         var name = fileNames [index]

        imagesUl.appendChild(newLi)
        newLi.appendChild(newImg)

        newImg.src = 'Gallery/' + name
        newImg.className = 'gallery-img'
    }

   
}