'use strict';

module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.bulkInsert(
			'Books',
			[
				{
					name: 'A Secret History of Witches',
					volume: '1',
					description:
						'A sweeping historical saga that traces five generations of fiercely powerful mothers and daughters — witches whose magical inheritance is both a dangerous threat and an extraordinary gift.',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780316508582_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'A Danger to Herself and Others',
					volume: '1',
					description:
						'Packed with intrigue and suspense, A Danger to Herself and Others is great for readers who loved Suicide Notes for Beautiful Girls by Lynn Weingarten and Two Can Keep a Secret by Karen McManus!',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781492667247_p0_v2_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Her One Mistake',
					volume: '1',
					description:
						"What should have been a fun-filled, carefree day takes a tragic turn for the worse for one mother when her best friend's child goes missing in this suspenseful, compulsively readable, and darkly twisted psychological thriller.",
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781501194221_p0_v3_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Light Over London',
					volume: '1',
					description:
						'Reminiscent of Martha Hall Kelly"s Lilac Girls and Kristin Hannah"s The Nightingale, this sweeping, entrancing story is a must-read for fans of remarkable women rising to challenges they could never have predicted',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781501196416_p0_v4_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Where the Crawdads Sing',
					volume: '1',
					description: 'A Reese Witherspoon x Hello Sunshine Book Club Pick',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780735219090_p0_v10_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Becoming',
					volume: '1',
					description:
						'An intimate, powerful, and inspiring memoir by the former First Lady of the United States',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781524763138_p0_v6_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Trials of Morrigan Crow',
					volume: '1',
					description:
						'A breathtaking, enchanting new series by debut author Jessica Townsend, about a cursed girl who escapes death and finds herself in a magical world--but is then tested beyond her wildest imagination.',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780316508896_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Hunting Prince Dracula',
					volume: '1',
					description:
						'In this New York Times bestselling thriller, bizarre murders are discovered in the castle of Prince Vlad the Impaler, otherwise known as Dracula. Could it be a copycat killer...or has the depraved prince been brought back to life? ',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780316551670_p0_v5_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Drowning: A Novel',
					volume: '1',
					description:
						'Every seven years, a boy disappears from Camp Waukeelo. Who will be next?',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781492669005_p0_v2_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Every Breath',
					volume: '1',
					description:
						'In the romantic tradition of The Notebook and Nights in Rodanthe, #1 New York Times bestselling author Nicholas Sparks returns with a story about a chance encounter that becomes a touchstone for two vastly different individuals — transcending decades, continents, and the bittersweet workings of fate.',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781538715772_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Forgotten Book',
					volume: '1',
					description:
						'A Jane Austen-inspired YA tale from Mechthild Gläser (The Book Jumper) about a sixteen-year-old girl who finds a magical book—and discovers that anything she writes inside it comes true',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781250294487_p0_v2_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Radium Girls: The Dark Story of America"s Shining Women',
					volume: '1',
					description:
						'The incredible true story of the women who fought America"s Undark danger',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781492650959_p0_v2_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Girls of Paper and Fire',
					volume: '1',
					description:
						'Uncover a riveting story of palace intrigue set in a sumptuous Asian-inspired fantasy world in the breakout YA novel that Publisher"s Weekly calls "elegant and adrenaline-soaked".',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780316453523_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Room on Rue Amelie',
					volume: '1',
					description:
						'A moving and entrancing novel set in Paris during World War II about an American woman, a dashing pilot, and a young Jewish girl whose fates unexpectedly entwine."',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781501190544_p0_v2_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Orphan"s Tale',
					volume: '1',
					description:
						'Seventeen-year-old Noa has been cast out in disgrace after becoming pregnant by a Nazi soldier during the occupation of her native Holland. Heartbroken over the loss of the baby she was forced to give up for adoption, she lives above a small German rail station, which she cleans in order to earn her keep."',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780778319818_p0_v9_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Who Goes Moo?',
					volume: '1',
					description:
						'Introducing Who Goes Moo? – an adorable tabbed board book featuring animals from the farm. Each animal is introduced with a short rhyme, and children are encouraged to join in with the animal noises while working out "who goes moo".',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781786921215_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'An Anonymous Girl',
					volume: '1',
					description:
						'From the authors of the blockbuster bestseller The Wife Between Us, Greer Hendricks and Sarah Pekkanen, An Anonymous Girl will keep you riveted through the last shocking twist.',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781250133731_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'All the Missing Girls',
					volume: '1',
					description:
						'A masterful psychological suspense debut about the disappearances of two young women—a decade apart—told in reverse.',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9781501107979_p0_v6_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'The Tail of Emily Windsnap',
					volume: '1',
					description:
						"A young girl learns she's half mermaid and plunges into a scheme to reunite with her father in this entrancing, satisfying tale that beckons readers far below the waves.",
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780763660208_p0_v1_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},

				{
					name: 'Educated',
					volume: '1',
					description:
						'An unforgettable memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University',
					imgURL:
						'https://prodimage.images-bn.com/pimages/9780399590504_p0_v5_s550x406.jpg',
					maxQuantity: 10,
					availableQuantity: 10,
					createdAt: new Date(),
					updatedAt: new Date(),
				},
			],
			{},
		);
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.bulkDelete('Books', null, {});
	},
};
