class ProductManager{
    constructor(){
        this.products = []
    }

    addProduct({id, title, description, price, thumbnail, code, stock}){
        const product = new ProductManager({id, title, description, price, thumbnail, code, stock})
        this.products.push(product)
    }

    getProducts(){
        return this.products
    }

    getProductById(id){
        const product = this.products.find(e => e.id === id)
        product.id = true

        if(id == undefined || false){
            throw new Error('No se encontró id del producto')
        }
    }
}

class Product{
    constructor(id, title, description, price, thumbnail, code, stock = false){
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock

        if(id == undefined){
            throw new Error('ID ES UN CAMPO OBLIGATORIO')
        }
        if(title == undefined){
            throw new Error('TITLE ES UN CAMPO OBLIGATORIO')
        }
        if(description == undefined){
            throw new Error('DESCRIPTION ES UN CAMPO OBLIGATORIO')
        }
        if(price == undefined){
            throw new Error('PRICE ES UN CAMPO OBLIGATORIO')
        }
        if(thumbnail == undefined){
            throw new Error('THUMBNAIL ES UN CAMPO OBLIGATORIO')
        }
        if(code == undefined){
            throw new Error('CODE ES UN CAMPO OBLIGATORIO')
        }
        if(stock == undefined){
            throw new Error('STOCK ES UN CAMPO OBLIGATORIO')
        }

    }
}

const productManager = new ProductManager()

productManager.addProduct({id: '1', title: 'Producto 1', description: 'Este es un producto y es el número 1', price: 200, thumbnail: '', code: 450, stock: '20'})
productManager.addProduct({id: '2', title: 'Producto 2', description: 'Este es un producto y es el número 2', price: 220, thumbnail: '', code: 350, stock: '30'})
productManager.addProduct({id: '3', title: 'Producto 3', description: 'Este es un producto y es el número 3', price: 230, thumbnail: '', code: 250, stock: '40'})
productManager.addProduct({id: '4', title: 'Producto 4', description: 'Este es un producto y es el número 4', price: 240, thumbnail: '', code: 150, stock: '10'})

console.log(productManager.getProducts())
console.log(productManager.getProductById('1')) 
