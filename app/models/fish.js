const mongoose = require('mongoose')

const fishSchema = new mongoose.Schema(
	{
		species: {
			type: String,
			required: true,
		},
		size: {
			type: String,
			required: true,
		},
		weight: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: false,
		},
		bait: {
			type: String,
			required: false,
		},
		date: {
			type: Date,
			required: false,
			default: 10-5-2023,
		},
		notes: {
			type: String,
			required: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Fish', fishSchema)
