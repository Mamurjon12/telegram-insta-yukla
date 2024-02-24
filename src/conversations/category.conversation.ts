import { Conversation } from '@grammyjs/conversations'
import { MyContext } from '../session/session'
import { Menu, MenuRange } from '@grammyjs/menu'
import { InputFile, InputMediaBuilder } from 'grammy'

type ProductType = {
    id: number
    name: string
    description: string
    price: number
    image: string
}

const products: ProductType[] = [
    {
        id: 1,
        name: 'Smartphone',
        description:
            'A powerful smartphone with high-resolution display and advanced features.',
        price: 599.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 2,
        name: 'Laptop',
        description:
            'A lightweight laptop with a fast processor and long battery life.',
        price: 899.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 3,
        name: 'Wireless Headphones',
        description:
            'Premium wireless headphones with active noise cancellation technology.',
        price: 249.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 4,
        name: 'Smartwatch',
        description:
            'A sleek smartwatch with fitness tracking and heart rate monitoring.',
        price: 199.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 5,
        name: 'Digital Camera',
        description:
            'A high-resolution digital camera with advanced autofocus and image stabilization"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
        price: 799.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 6,
        name: 'Gaming Console',
        description:
            'A powerful gaming console with 4K graphics support and online multiplayer capabilities.',
        price: 499.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 7,
        name: 'Tablet',
        description:
            'A versatile tablet with a large touchscreen display and long battery life.',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 8,
        name: 'Wireless Speaker',
        description:
            'High-fidelity wireless speaker with immersive sound quality and voice assistant support.',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 9,
        name: 'Fitness Tracker',
        description:
            'An advanced fitness tracker with GPS tracking and heart rate monitoring.',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
    {
        id: 10,
        name: 'External Hard Drive',
        description:
            'A reliable external hard drive with large storage capacity and fast data transfer speeds.',
        price: 119.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdCUyMGltYWdlfGVufDB8fDB8fHww',
    },
]

type CategoryType = {
    id: number
    name: string
    image: string
    description: string
    products: ProductType[]
}

const categories: CategoryType[] = [
    {
        id: 1,
        name: 'Electronics',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description: 'Explore the latest electronic gadgets and devices.',
        products: [
            products[0], // Smartphone
            products[1], // Laptop
            products[2], // Wireless Headphones
            products[3], // Smartwatch
            products[4], // Digital Camera
        ],
    },
    {
        id: 2,
        name: 'Gaming',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Immerse yourself in the world of gaming with top-notch consoles and accessories.',
        products: [
            products[5], // Gaming Console
        ],
    },
    {
        id: 3,
        name: 'Tablets',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Discover powerful and versatile tablets for work and entertainment.',
        products: [
            products[6], // Tablet
        ],
    },
    {
        id: 4,
        name: 'Audio',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Experience superior sound quality with our range of audio devices and accessories.',
        products: [
            products[2], // Wireless Headphones
            products[8], // Wireless Speaker
        ],
    },
    {
        id: 5,
        name: 'Wearable Tech',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Stay connected and track your fitness goals with our wearable technology.',
        products: [
            products[3], // Smartwatch
            products[9], // Fitness Tracker
        ],
    },
    {
        id: 6,
        name: 'Computers',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Find the perfect computer to suit your needs, from powerful desktops to sleek laptops.',
        products: [
            products[1], // Laptop
            products[6], // Tablet
        ],
    },
    {
        id: 7,
        name: 'Cameras',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            "Capture life's moments in stunning detail with our range of digital cameras.",
        products: [
            products[4], // Digital Camera
        ],
    },
    {
        id: 8,
        name: 'Smart Home',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Transform your living space with cutting-edge smart home devices and technology.',
        products: [
            products[8], // Wireless Speaker (can be used in smart home setups)
        ],
    },
    {
        id: 9,
        name: 'Storage',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Keep your files safe and accessible with our range of storage solutions.',
        products: [
            products[10], // External Hard Drive
        ],
    },
    {
        id: 10,
        name: 'Accessories',
        image: 'https://t4.ftcdn.net/jpg/00/81/38/59/360_F_81385977_wNaDMtgrIj5uU5QEQLcC9UNzkJc57xbu.jpg',
        description:
            'Complete your setup with our collection of essential tech accessories.',
        products: [
            products[2], // Wireless Headphones
            products[8], // Wireless Speaker
        ],
    },
]

export const CategoryMenu = new Menu('CategoryMenu').dynamic((ctx) => {
    const range = new MenuRange()

    categories.forEach((category, index) => {
        range.text(
            (ctx) => (index === 0 ? '' : '<'),
            (ctx) => {
                if (index !== 0) {
                    const media = InputMediaBuilder.photo(
                        categories[index - 1].image
                    )
                    ctx.editMessageMedia(media)
                    ctx.editMessageCaption({
                        caption: categories[index - 1].description,
                    })
                }
            }
        )
        range.submenu(
            category.name,
            category.name.replaceAll(' ', '').toLowerCase()
        )
        range.text(
            (ctx) => (index === categories.length - 1 ? '' : '>'),
            (ctx) => {
                if (index !== categories.length - 1) {
                    const media = InputMediaBuilder.photo(category.image)
                    ctx.editMessageMedia(media)
                    ctx.editMessageCaption()
                }
            }
        )
    })

    return range
})

type MyConversation = Conversation<MyContext>

export async function categoryConversation(
    conversation: MyConversation,
    ctx: MyContext
) {
    await ctx.replyWithPhoto(categories[0].image, {
        caption: categories[0].description,
        reply_markup: CategoryMenu,
    })
}
