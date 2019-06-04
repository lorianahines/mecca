# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
  { 
    first_name: "Supa",
    last_name: "Cent",
    email: "supacent@thecrayoncase.com",
    is_owner: true,
    password: "123456"

  }, 
  { 
    first_name: "Cashmere",
    last_name: "Nicole",
    email: "cashmere@beautybakerie.com",
    is_owner: true,
    password: "123456"
    
  },
  { 
    first_name: "Chichi",
    last_name: "Eburu",
    email: "chichi@juvia.com",
    is_owner: true,
    password: "123456"
  },
  { 
    first_name: "Loriana",
    last_name: "Ayinde",
    email: "lori@gmail.com",
    is_owner: false,
    password: "123456"
  },
  { 
    first_name: "Amelo",
    last_name: "Bacchus",
    email: "amelo@gmail.com",
    is_owner: false,
    password: "123456"
  },
  { 
    first_name: "Ranelle",
    last_name: "Tulloch",
    email: "ranelle@gmail.com",
    is_owner: false,
    password: "123456"
  }
])

businesses = Business.create([
  { 
    name: "The Crayon Case",
    url: "https://thecrayoncase.com/",
    photo_url: "https://di2ponv0v5otw.cloudfront.net/posts/2018/05/02/5ae9e2c56bf5a64d3eff4c40/m_5aec373ccaab4430d912b1e4.jpg",
    description: "The Crayon Case is a cosmetic line dedicated to amateur make-up users, and aspiring make-up artists. Aiming to encourage all people to treat their face as a blank canvas, as they pursue the ultimate creation of their personal masterpiece.",
    is_green: true,
    category: "beauty",
    user_id: 1

  }, 
  { 
    name: "Beauty Bakerie",
    url: "https://www.beautybakerie.com/",
    photo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_kIpxax5vA3Ts2FsDVE1DAkx-9c8-ro9Zcx4q4AUEKt793Qh0w",
    description: "Revealing beauty's sweet side, Beauty Bakerie's cruelty free cosmetics have mouths watering over their incredibly flattering hues. The brand's multi-coloured, super cute aesthetic houses some seriously powerful cosmetics - ultra-pigmented eyeshadows, long-lasting liquid lipsticks and smudge proof brow gels. Shelfie-worthy packaging, high-quality formulas and sweet scents? With Beauty Bakerie, you can have your cake and eat it too…",
    is_green: true,
    category: "beauty",
    user_id: 2
    
  },
  { 
    name: "Juvia's Place",
    url: "https://www.juviasplace.com/",
    photo_url: "https://i.pinimg.com/originals/3a/de/aa/3adeaad099cb4ee0e7bcfbbe9a92a72a.jpg",
    description: "Juvia’s is a cosmetic brand providing you with the most rich, vibrant and highly pigmented essential colors of life that takes you from the office to the Caribbean Islands and everywhere in between! We created Juvia’s as a way to provide beauty enthusiasts an affordable collection of colorful eye shadows, makeup tools and beauty essentials.",
    is_green: true,
    category: "beauty",
    user_id: 3
  }
])

reviews = Review.create([
  {
    review_date: 2019_06_04,
    title: "Best foundation ever!!!",
    rating: 8,
    review_body: "I was so excited when Juvia's Place announced their new foundation. I'm shade J500 and it's a PERFECT match for me. I highly recommend this foundation!",
    user_id: 4,
    business_id: 3
  },
  {
    review_date: 2019_06_02,
    title: "Smoothest shadow yet!",
    rating: 9,
    review_body: "I love the silver/gray eye shadows!!!! They are soooooo pretty. Ive been waiting for these tones. You guys never disappoint. The coral tones are great for the summer!!!!!",
    user_id: 5,
    business_id: 1
  },
  {
    review_date: 2019_06_01,
    title: "Lipstick never smudges",
    rating: 10,
    review_body: "It is definitely a matte. The pigment is nice and rich. A little goes a long way. It is easy to remove unlike some other dark mattes. The color is more burgundy than the first pic. Still happy with the purse.",
    user_id: 6,
    business_id: 2
  }

])