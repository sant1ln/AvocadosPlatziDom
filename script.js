(async() =>{
    const MainContainer = document.querySelector('main')
    const url = `https://platzi-avo.vercel.app/api/avo`
    let avocado = await fetch(url)
    let response = await avocado.json()
    let {data} = response
    const items = [] 
    data.forEach(({image:img,name,price:price_item}) => {
       const image = document.createElement('img')
       image.src = `https://platzi-avo.vercel.app/${img}`
       
       const title = document.createElement('h2')
       title.textContent = name

       const price = document.createElement('p')
       price.textContent = `$${price_item}`

       const container = document.createElement('div')
       container.classList.add('item')

       container.append(image,title,price)
       items.push(container)
    });
    MainContainer.append(...items)
})()
