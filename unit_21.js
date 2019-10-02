function imgSlider() {
    const a = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'],
          images = document.querySelectorAll('.img-12-min'),
          dataText = [];
    let currImg = '0';


    function pushDataText() {
        images.forEach(img => {
            let textAttr = img.getAttribute('data-text');
            dataText.push(textAttr);
        });
    }
    pushDataText();

    function showMax() {
        images.forEach((img, i) => {
            img.addEventListener('click', () => {
                images.forEach(img => img.classList.remove('active-img'));
               
                img.classList.add('active-img');
                currImg = i;
                
                // вывод активной картинки
                document.querySelector('.div-12-max').innerHTML = `<img src="img/${a[i]}" alt="#" class="img-12-max">`;
                // вывод текста активной картинки
                document.querySelector('.img-12-text').innerHTML = dataText[i];
            });
        });
    }

    function slidePrev() {
        currImg = parseInt(currImg);

        if (currImg <= a.length && currImg >= 1) {
            currImg--;
            images.forEach(img => img.classList.remove('active-img'));
            images[currImg].classList.add('active-img');  

            // вывод активной картинки
            document.querySelector('.div-12-max').innerHTML = `<img src="img/${a[currImg]}" alt="#" class="img-12-max">`;
            // вывод текста активной картинки
            document.querySelector('.img-12-text').innerHTML = dataText[currImg];
        }  
    }

    function slideNext() {
        currImg = parseInt(currImg);
        if (currImg <= a.length - 2) {
            currImg++;
            images.forEach(img => img.classList.remove('active-img'));
            images[currImg].classList.add('active-img');

            // вывод активной картинки
            document.querySelector('.div-12-max').innerHTML = `<img src="img/${a[currImg]}" alt="#" class="img-12-max">`;
            // вывод текста активной картинки
            document.querySelector('.img-12-text').innerHTML = dataText[currImg];
        }
    }

    function resetSlider() {
        currImg = parseInt(currImg);

        currImg = 0;
        images.forEach(img => img.classList.remove('active-img'));
        images[currImg].classList.add('active-img');

        // вывод активной картинки
        document.querySelector('.div-12-max').innerHTML = `<img src="img/${a[currImg]}" alt="#" class="img-12-max">`;
        // вывод текста активной картинки
        document.querySelector('.img-12-text').innerHTML = dataText[currImg];
    }

    showMax();
    document.querySelector('.prev').onclick = slidePrev;
    document.querySelector('.next').onclick = slideNext;
    document.querySelector('.reset').onclick = resetSlider;
}
imgSlider();


