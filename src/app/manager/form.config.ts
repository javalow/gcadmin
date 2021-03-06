import { Validators } from '@angular/forms';
import { ValidationService } from '../common/formly/validation.service';
import * as firebase from 'firebase';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
// import { AuthService } from '../auth/services/auth.service';


// var clientDeets: any [] = [];
// var cdRef: firebase.database.Reference = firebase.database().ref('/ftuserprofiles');
//
//
// this.cdQ.on('value', itemSnapshot => {
// 	this.clientDeets = [];
//     itemSnapshot.forEach( userSnap => {
//       this.items.push(userSnap.val());
// 		return false;
// });


export const itemsFormConfig = () => ({


// NEWS

	ftnews: [
		{
			type: 'input',
			key: 'title',
			templateOptions: {
				label: 'Title',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			key: 'body',
			type: 'textarea',
			templateOptions: {
				rows: 5,
				label: 'Description',
				description: 'Please enter the article body'
			}
		},
		{
			key: 'postedAt',
			type: 'date-time-picker',
			templateOptions: {
				label: 'Posted at',
				showTime: true
			}
		},
		{
			type: 'file-upload',
			key: 'thumb',
			templateOptions: {
				label: 'Thumbnail',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				description: 'Recommended: 300 px wide x 300 px high'
			}
		},
		{
			type: 'file-upload',
			key: 'picture',
			templateOptions: {
				label: 'Picture',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				description: 'Recommended: 750 px wide x 500 px high'
			}
		}
	],

	// Products

	ftproducts: [
		{
			type: 'input',
			key: 'title',
			templateOptions: {
				label: 'Τitle',
				description: 'Provide the official product title',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'numeric-input',
			key: 'price',
			templateOptions: {
				label: 'Price',
				description: 'Please enter the product price. Decimals are allowed.',
				mask: {
					allowDecimal: true,
					decimalLimit: 2
				}
			}
		},
		{
			key: 'body',
			type: 'textarea',
			templateOptions: {
				rows: 5,
				label: 'Description',
				description: 'Please enter the product descripiton',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'file-upload',
			key: 'thumb',
			templateOptions: {
				label: 'Thumbnail',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				description: 'Recommended: 300 px wide x 300 px high'
			}
		},
		{
			type: 'file-upload',
			key: 'pictures',
			templateOptions: {
				label: 'Product pictures',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				maxFiles: 20,
				description: 'Recommended: 750 px wide x 500 px high'
			}
		},
		{
			type: 'input',
			key: 'url',
			templateOptions: {
				label: 'URL',
				description: 'Enter the page where this product is published.',
				placeholder: 'https://demo.morethanthemes.com/retailplus/commerce-default/node/12',
				required: true
			},
			validators: {
				validation: ValidationService.urlValidator
			},
			validation: {
				messages: {
					invalidUrl: ValidationService.getValidatorErrorMessage('invalidUrl')
				}
			}
		}
	],

	// Properties - Real Estate?

	// ftproperties: [
	// 	{
	// 		type: 'input',
	// 		key: 'title',
	// 		templateOptions: {
	// 			label: 'Title',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'repeater',
	// 		wrappers: ['panel'],
	// 		key: 'features',
	// 		templateOptions: {
	// 			title: 'Property Features'
	// 		},
	// 		fieldArray: {
	// 			className: 'row',
	// 			fieldGroup: [
	// 				{
	// 					type: 'repeater',
	// 					wrappers: ['panel'],
	// 					key: 'items',
	// 					templateOptions: {
	// 						title: 'Group of features'
	// 					},
	// 					fieldArray: {
	// 						className: 'row',
	// 						fieldGroup: [
	// 							{
	// 								className: 'col-12',
	// 								type: 'input',
	// 								key: 'caption',
	// 								templateOptions: {
	// 									label: 'Caption',
	// 									placeholder: 'Beds'
	// 								}
	// 							},
	// 							{
	// 								className: 'col-12',
	// 								type: 'input',
	// 								key: 'value',
	// 								templateOptions: {
	// 									label: 'Value'
	// 								}
	// 							}
	// 						]
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'input',
	// 					key: 'title',
	// 					templateOptions: {
	// 						label: 'Title',
	// 						placeholder: 'General'
	// 					}
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		key: 'description',
	// 		type: 'textarea',
	// 		templateOptions: {
	// 			rows: 5,
	// 			label: 'Description',
	// 			description: 'Please enter the property descripiton',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'input',
	// 		key: 'category',
	// 		templateOptions: {
	// 			label: 'Type',
	// 			required: true,
	// 			description: 'e.g. Flat'
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'input',
	// 		key: 'code',
	// 		templateOptions: {
	// 			label: 'Code',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'input',
	// 		key: 'intention',
	// 		templateOptions: {
	// 			label: 'Intention',
	// 			required: true,
	// 			description: 'e.g. Rent'
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'numeric-input',
	// 		key: 'price',
	// 		templateOptions: {
	// 			label: 'Price',
	// 			description: 'Please enter the price. Decimals are allowed.',
	// 			mask: {
	// 				allowDecimal: true,
	// 				decimalLimit: 2
	// 			}
	// 		}
	// 	},
	// 	{
	// 		type: 'numeric-input',
	// 		key: 'surface',
	// 		templateOptions: {
	// 			label: 'Surface',
	// 			description: 'Please enter the surface. Decimals are allowed.',
	// 			mask: {
	// 				allowDecimal: true,
	// 				decimalLimit: 3
	// 			}
	// 		}
	// 	},
	// 	{
	// 		type: 'input',
	// 		key: 'address',
	// 		templateOptions: {
	// 			label: 'Address',
	// 			required: true,
	// 			description: 'e.g. 59 Chestnut Ridge Rd, Bedford Corners, NY 10549'
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		key: 'buildIn',
	// 		type: 'date-time-picker',
	// 		templateOptions: {
	// 			label: 'Built in',
	// 			showTime: false
	// 		}
	// 	},
	// 	{
	// 		key: 'mapdata',
	// 		fieldGroup: [
	// 			{
	// 				type: 'coords',
	// 				key: 'annotations',
	// 				templateOptions: {
	// 					label: 'Location on Map',
	// 					longitude: 34.4,
	// 					latitude: 35.455
	// 				}
	// 			}
	// 		]
	// 	},
	// 	{
	// 		type: 'file-upload',
	// 		key: 'pictures',
	// 		templateOptions: {
	// 			label: 'Property pictures',
	// 			storage: 'FIRE',
	// 			disabled: true,
	// 			buttonLabel: 'Upload',
	// 			maxFiles: 20,
	// 			description: 'Recommended: 750 px wide x 500 px high'
	// 		}
	// 	},
	// 	{
	// 		type: 'file-upload',
	// 		key: 'thumbnail',
	// 		templateOptions: {
	// 			label: 'Thumbnail',
	// 			storage: 'FIRE',
	// 			disabled: true,
	// 			buttonLabel: 'Upload',
	// 			description: 'Recommended: 300 px wide x 300 px high'
	// 		}
	// 	},
	// 	{
	// 		key: 'contact',
	// 		className: 'row',
	// 		wrappers: ['panel'],
	// 		templateOptions: {
	// 			title: 'Contact Information'
	// 		},
	// 		fieldGroup: [
	// 			{
	// 				className: 'col-12',
	// 				type: 'input',
	// 				key: 'email',
	// 				templateOptions: {
	// 					label: 'Email',
	// 					required: true
	// 				},
	// 				validators: {
	// 					validation: ValidationService.emailValidator
	// 				},
	// 				validation: {
	// 					messages: {
	// 						invalidEmailAddress: ValidationService.getValidatorErrorMessage('invalidEmailAddress')
	// 					}
	// 				}
	// 			},
	// 			{
	// 				className: 'col-12',
	// 				type: 'input',
	// 				key: 'phoneNumber',
	// 				templateOptions: {
	// 					label: 'Phone Number'
	// 				}
	// 			},
	// 			{
	// 				className: 'col-12',
	// 				type: 'input',
	// 				key: 'web',
	// 				templateOptions: {
	// 					label: 'Webpage',
	// 					description: 'Enter the URL to your webpage',
	// 					placeholder: 'http://appseed.io/',
	// 					required: false
	// 				},
	// 				validators: {
	// 					validation: ValidationService.urlValidator
	// 				},
	// 				validation: {
	// 					messages: {
	// 						invalidUrl: ValidationService.getValidatorErrorMessage('invalidUrl')
	// 					}
	// 				}
	// 			}
	// 		]
	// 	}
	// ],

	// Food Menu

	// ftmenuitems: [
	// 	{
	// 		type: 'input',
	// 		key: 'title',
	// 		templateOptions: {
	// 			label: 'Title',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'repeater',
	// 		wrappers: ['panel'],
	// 		key: 'standardOptions',
	// 		templateOptions: {
	// 			title: 'Standard options'
	// 		},
	// 		fieldArray: {
	// 			className: 'row',
	// 			fieldGroup: [
	// 				{
	// 					className: 'col-12',
	// 					type: 'input',
	// 					key: 'name',
	// 					templateOptions: {
	// 						label: 'Name'
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'check',
	// 					key: 'selected',
	// 					defaultValue: true,
	// 					templateOptions: {
	// 						label: 'This option is pre-selected'
	// 					}
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		type: 'repeater',
	// 		wrappers: ['panel'],
	// 		key: 'extraOptions',
	// 		templateOptions: {
	// 			title: 'Extra options'
	// 		},
	// 		fieldArray: {
	// 			className: 'row',
	// 			fieldGroup: [
	// 				{
	// 					className: 'col-12',
	// 					type: 'input',
	// 					key: 'name',
	// 					templateOptions: {
	// 						label: 'Name'
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'numeric-input',
	// 					key: 'value',
	// 					templateOptions: {
	// 						label: 'Price',
	// 						description: 'Please enter the price. Decimals are allowed.',
	// 						mask: {
	// 							allowDecimal: true,
	// 							decimalLimit: 2
	// 						}
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'check',
	// 					key: 'selected',
	// 					defaultValue: false,
	// 					templateOptions: {
	// 						label: 'This option is pre-selected'
	// 					}
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		key: 'body',
	// 		type: 'textarea',
	// 		templateOptions: {
	// 			rows: 5,
	// 			label: 'Description',
	// 			description: 'Please enter the item descripiton',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'check',
	// 		key: 'isFeatured',
	// 		defaultValue: false,
	// 		templateOptions: {
	// 			label: 'This item is featured'
	// 		}
	// 	},
	// 	{
	// 		type: 'input',
	// 		key: 'category',
	// 		templateOptions: {
	// 			label: 'Category',
	// 			required: true,
	// 			description: 'e.g. Appetizers'
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'repeater',
	// 		wrappers: ['panel'],
	// 		key: 'price',
	// 		templateOptions: {
	// 			title: 'Portion Sizes and Price'
	// 		},
	// 		fieldArray: {
	// 			className: 'row',
	// 			fieldGroup: [
	// 				{
	// 					className: 'col-12',
	// 					type: 'input',
	// 					key: 'name',
	// 					templateOptions: {
	// 						label: 'Name'
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'input',
	// 					key: 'currency',
	// 					templateOptions: {
	// 						label: 'Currency symbol'
	// 					}
	// 				},
	// 				{
	// 					className: 'col-12',
	// 					type: 'numeric-input',
	// 					key: 'value',
	// 					templateOptions: {
	// 						label: 'Price',
	// 						description: 'Please, enter the price. Decimals are allowed',
	// 						mask: {
	// 							allowDecimal: true,
	// 							decimalLimit: 2
	// 						}
	// 					}
	// 				}
	// 			]
	// 		}
	// 	},
	// 	{
	// 		type: 'file-upload',
	// 		key: 'pictures',
	// 		templateOptions: {
	// 			label: 'Item pictures',
	// 			storage: 'FIRE',
	// 			disabled: true,
	// 			buttonLabel: 'Upload',
	// 			maxFiles: 20,
	// 			description: 'Recommended: 750 px wide x 500 px high'
	// 		}
	// 	},
	// 	{
	// 		type: 'file-upload',
	// 		key: 'thumb',
	// 		templateOptions: {
	// 			label: 'Thumbnail',
	// 			storage: 'FIRE',
	// 			disabled: true,
	// 			buttonLabel: 'Upload',
	// 			description: 'Recommended: 300 px wide x 300 px high'
	// 		}
	// 	}
	// ],


	// User Profiles

	ftuserprofiles: [
		{
			type: 'input',
			key: 'title',
			templateOptions: {
				label: 'Client ID',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'input',
			key: 'firstName',
			templateOptions: {
				label: 'First name',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'input',
			key: 'lastName',
			templateOptions: {
				label: 'Last name',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'input',
			key: 'email',
			templateOptions: {
				label: 'Email',
				required: true
			},
			validators: {
				validation: ValidationService.emailValidator
			},
			validation: {
				messages: {
					invalidEmailAddress: ValidationService.getValidatorErrorMessage('invalidEmailAddress')
				}
			}
		},
		{
			type: 'input',
			key: 'email2',
			templateOptions: {
				label: 'Alternate Email',
				required: false
			},
			validators: {
				validation: ValidationService.emailValidator
			},
			validation: {
				messages: {
					invalidEmailAddress: ValidationService.getValidatorErrorMessage('invalidEmailAddress')
				}
			}
		},
		{
			type: 'input',
			key: 'phoneNumber',
			templateOptions: {
				label: 'Phone Number',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'input',
			key: 'address',
			templateOptions: {
				label: 'Address',
				required: true,
				description: 'e.g. 59 Chestnut Ridge Rd, Bedford Corners, NY 10549'
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: "select",
			key: "countries",

    className: "col-xs-6",
    templateOptions: {
        label: "County",
        options: [
            {"name": "Sonoma", "id":"Sonoma"},
            {"name": "Marin", "id":"Marin"},
            {"name": "SF", "id":"SF"},
						{"name": "Alameda", "id":"Alameda"},
						{"name": "San Mateo", "id":"San Mateo"},
						{"name": "Santa Clara", "id":"Santa Clara"},
						{"name": "Contra Costa", "id":"Contra Costa"},
						{"name": "Napa", "id":"Napa"},
						{"name": "Solano", "id":"Solano"},
						{"name": "Other", "id":"Other"},
        ],
        valueProp: "id",
        labelProp: "name",
        required:true
    },
	},

	{
		type: "select",
		key: "service",

	className: "col-xs-6",
	templateOptions: {
			label: "Service Level",
			options: [
				{"name": "Remote", "id":"Remote"},
				{"name": "Bed Only", "id":"Bed Only"},
				{"name": "Other", "id":"Other"},
			],
			valueProp: "id",
			labelProp: "name",
			required:true
	},

	},
	{
		type: 'input',
		key: 'numbeds',
		templateOptions: {
			label: 'Number of Beds',
			required: true
		},
		validators: {
			validation: Validators.compose([Validators.required])
		}
	},
	{
		type: "select",
		key: "hardware",

	// className: "col-xs-6",
	templateOptions: {
			label: "Bed Sizes",
			placeholder: "Type of Beds Installed",
			options: [
				{"name": "Narrow", "value":"Narrow"},
				{"name": "Classic", "value":"Classic"},
				{"name": "Urban", "value":"Urban"},
				{"name": "Prototype", "value":"Prototype"},
			],
			valueProp: "value",
			labelProp: "name",
			required:true
	}
},
		// {
		// 	type: 'file-upload',
		// 	key: 'avatar',
		// 	templateOptions: {
		// 		label: 'Avatar',
		// 		storage: 'FIRE',
		// 		disabled: true,
		// 		buttonLabel: 'Upload',
		// 		description: 'Recommended: 300 px wide x 300 px high'
		// 	}
		// },
		{
			type: 'input',
			key: 'startdate',
			templateOptions: {
				label: 'Start Date',
				required: true,
				description: 'enter month & year started service'
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			key: 'mapdata',
			fieldGroup: [
				{
					type: 'coords',
					key: 'annotations',
					templateOptions: {
						label: 'Client Location (Map)',
						latitude: 38.4334355,
						longitude: -122.7174043,

					}
				}
			]
		},
		{
			key: 'bio',
			type: 'textarea',
			templateOptions: {
				rows: 5,
				label: 'Client goals & notes',
				description: 'Add any additional details not captured above',
				required: false
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'file-upload',
			key: 'bedmap',
			templateOptions: {
				label: 'Current Season Bed Maps',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				maxFiles: 20,
				description: 'Upload latest bed maps'
			}
		},
			{
				type: 'file-upload',
				key: 'bedmap-older',
				templateOptions: {
					label: 'Previous Bed Maps',
					storage: 'FIRE',
					disabled: true,
					buttonLabel: 'Upload',
					maxFiles: 20,
					description: 'Upload latest bed maps'
				},
			},
		// {
		// 		type: 'repeater',
		// 		wrappers: ['panel'],
		// 		key: 'bedmaps',
		// 		templateOptions: {
		// 			title: 'Bed Maps',
		// 			// btnText: "Add another",
		// 		},
		// 		fieldArray: {
		// 			className: 'row',
		// 			fieldGroup: [
		// 				{
		// 					className: 'col-12',
		// 					type: 'input',
		// 					key: 'bedmap-descripiton',
		// 					templateOptions: {
		// 						label: 'Season & Bed #'
		// 					}
		// 				},
		// 				{
		// 					type: 'file-upload',
		// 					key: 'bedmap',
		// 					templateOptions: {
		// 						label: 'Bed Maps',
		// 						storage: 'FIRE',
		// 						disabled: true,
		// 						buttonLabel: 'Upload',
		// 						maxFiles: 20,
		// 						description: 'Upload latest bed maps'
		// 					},
		// 				}
		// 			]
		// },


		{
			type: 'input',
			key: 'webpage',
			templateOptions: {
				label: 'Personal webpage',
				description: 'Enter the URL to your personal webpage',
				placeholder: 'http://www.biography.com/people/bill-gates-9307520',
				required: false
			},
			validators: {
				validation: ValidationService.urlValidator
			},
			validation: {
				messages: {
					invalidUrl: ValidationService.getValidatorErrorMessage('invalidUrl')
				}
			}
		}
	],

	// Catalog Items


	ftcatalogitems: [
		{
			type: 'input',
			key: 'title',
			templateOptions: {
				label: 'Activity',
				description: 'Enter the activity name',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			key: 'body',
			type: 'textarea',
			templateOptions: {
				rows: 5,
				label: 'Description',
				description: 'Please enter the activity description',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		// {
		// 	type: 'file-upload',
		// 	key: 'thumb',
		// 	templateOptions: {
		// 		label: 'Thumbnail',
		// 		storage: 'FIRE',
		// 		disabled: true,
		// 		buttonLabel: 'Upload',
		// 		description: 'Recommended: 300 px wide x 300 px high'
		// 	}
		// },
		// {
		// 	type: 'input',
		// 	key: 'url',
		// 	templateOptions: {
		// 		label: 'URL',
		// 		description: 'Enter the page where this item is published.',
		// 		placeholder: 'https://issuu.com/dibiaggiony/docs/katalog',
		// 		required: true
		// 	},
		// 	validators: {
		// 		validation: ValidationService.urlValidator
		// 	},
		// 	validation: {
		// 		messages: {
		// 			invalidUrl: ValidationService.getValidatorErrorMessage('invalidUrl')
		// 		}
		// 	}
		// },{
			{
			key: 'date',
			type: 'date-time-picker',
			templateOptions: {
				label: 'Activity Date',
				showTime: true,
				required: true
			}
		},
		{
			className: 'col-12',
			type: 'input',
			key: 'email',
			templateOptions: {
				label: 'Client Email',
				required: true
			},
			validators: {
				validation: ValidationService.emailValidator
			},
			validation: {
				messages: {
					invalidEmailAddress: ValidationService.getValidatorErrorMessage('invalidEmailAddress')
				}
			}
		},
		{
			type: 'input',
			key: 'pdf',
			templateOptions: {
				label: 'Supporting files',
				description: 'Enter the File URL',
				placeholder: 'https://skounis.s3.amazonaws.com/mobile-apps/business-directory/assets/pdf/catalog-2.pdf',
				required: false
			},
			validators: {
				validation: ValidationService.urlValidator
			},
			validation: {
				messages: {
					invalidUrl: ValidationService.getValidatorErrorMessage('invalidUrl')
				}
			}
		},
		{
			type: 'file-upload',
			key: 'pictures',
			templateOptions: {
				label: 'Supporting Pictures',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				maxFiles: 20

			}
		}
	],

	// Activity Feed

	ftactivityfeed: [
		{
			type: 'input',
			key: 'title',
			templateOptions: {
				label: 'Title',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			key: 'body',
			type: 'textarea',
			templateOptions: {
				rows: 5,
				label: 'Description',
				description: 'Please enter the post descripiton',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			type: 'file-upload',
			key: 'pictures',
			templateOptions: {
				label: 'Pictures',
				storage: 'FIRE',
				disabled: true,
				buttonLabel: 'Upload',
				maxFiles: 20,
				description: 'Recommended: 750 px wide x 500 px high'
			}
		},
		{
			type: 'input',
			key: 'posted_by',
			templateOptions: {
				label: 'Posted by',
				required: true
			},
			validators: {
				validation: Validators.compose([Validators.required])
			}
		},
		{
			key: 'date',
			type: 'date-time-picker',
			templateOptions: {
				label: 'Post date',
				showTime: true
			}
		}
	],

	// Photo Galleries

	// ftphotogalleries: [
	// 	{
	// 		type: 'input',
	// 		key: 'title',
	// 		templateOptions: {
	// 			label: 'Title',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		key: 'body',
	// 		type: 'textarea',
	// 		templateOptions: {
	// 			rows: 5,
	// 			label: 'Description',
	// 			description: 'Please enter the album descripiton',
	// 			required: true
	// 		},
	// 		validators: {
	// 			validation: Validators.compose([Validators.required])
	// 		}
	// 	},
	// 	{
	// 		type: 'file-upload',
	// 		key: 'picture',
	// 		templateOptions: {
	// 			label: 'Pictures',
	// 			storage: 'FIRE',
	// 			disabled: true,
	// 			buttonLabel: 'Upload',
	// 			maxFiles: 20
	// 		}
	// 	}
	// ],


	// Chat Rooms
//
// 	ftchatrooms: [
// 		{
// 			type: 'input',
// 			key: 'title',
// 			templateOptions: {
// 				label: 'Title',
// 				required: true
// 			},
// 			validators: {
// 				validation: Validators.compose([Validators.required])
// 			}
// 		},
// 		{
// 			type: 'input',
// 			key: 'icon',
// 			templateOptions: {
// 				label: 'Icon',
// 				required: true
// 			},
// 			validators: {
// 				validation: Validators.compose([Validators.required])
// 			}
// 		}
// 	]
});
