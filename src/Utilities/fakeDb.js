const fakeDb = () => {
    const watches = [
        'https://m.media-amazon.com/images/I/81q5dKdYRlL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/712xd6dVHVL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/81GV0GbNsYL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/71jtOln5IhL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/61FCTOS0xAL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/61rlZhEPK3L._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/814A168o2NL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/51NS1DkQ+-L._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/81t0KQkVwpS._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/71InJh4LIQL._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/511gXQ3x23S._AC_UL320_.jpg',
        'https://m.media-amazon.com/images/I/81-apmJINgL._AC_UL320_.jpg',
    ]
    const products = [
        { id: 1, name: 'Fitbit Versa Fitness Smartwatch', price: 125, image: watches[0] },
        { id: 2, name: 'Amazfit T-Rex Smart Watch', price: 99, image: watches[1] },
        { id: 3, name: 'Fossil Mens Chronograph Watch', price: 154, image: watches[2] },
        { id: 4, name: 'Timex Ironman Watch', price: 183, image: watches[3] },
        { id: 5, name: 'Apple Watch Sport Band - Regular', price: 164, image: watches[4] },
        { id: 6, name: 'Michael Steel Watch', price: 136, image: watches[5] },
        { id: 7, name: 'Lacoste TR90 Quartz Watch', price: 88, image: watches[6] },
        { id: 8, name: 'Citizen Watch Stainless watch', price: 143, image: watches[7] },
        { id: 9, name: 'Samsung Galaxy Watch', price: 178, image: watches[8] },
        { id: 10, name: 'SUUNTO Outdoor Sports Watch', price: 128, image: watches[9] },
        { id: 11, name: 'Anne KleinBangle Watch', price: 149, image: watches[10] },
        { id: 12, name: 'Casio Mens Watch with Resin Black,', price: 145, image: watches[11] },
    ]
    return products;
}
export { fakeDb }