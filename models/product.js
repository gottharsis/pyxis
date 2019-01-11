// @flow

export interface IProduct {
	id: number;
	name: string;
	price: number;
	imageURL: string;
	description: string;
}

class Product {
	name: string
	id: number
	price: number
	imageURL: string
	description: string

	constructor({ id, name, price, imageURL, description }: IProduct) {
		this.id = id
		this.name = name
		this.price = price
		this.imageURL = imageURL
		this.description = description
	}
}
