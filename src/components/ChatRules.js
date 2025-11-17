// Chat rules converted from Python NLTK pairs into JavaScript RegEx rules

export const rules = [
    {
      pattern: /hi|hello|hey|morning|afternoon|sasa|woozah/i,
      responses: [
        "Hello, how can I assist you today?",
        "Hi there! How can I help?"
      ]
    },
  
    {
      pattern: /how are you|uko aje/i,
      responses: [
        "I'm doing great, thanks for asking!",
        "I'm fine, how about you?"
      ]
    },
  
    {
      pattern: /(.*)lexxy|lexxy(.*)/i,
      responses: [
        "Welcome to Lexxy Pastry, where we give you a little taste of home with delicious pastries — just for you! Interested😊?"
      ]
    },
  
    {
      pattern: /(.*)cake|cakes(.*)/i,
      responses: [
        "We have many varieties of cakes right here at our pastry shop — just for you! Interested?"
      ]
    },
  
    {
      pattern: /yes/i,
      responses: [
        "You can find our different varieties of cakes when you sign in. Start Now! 😊"
      ]
    },
  
    {
      pattern: /(.*)pie|pies(.*)/i,
      responses: [
        "We also have different varieties of pies if you are interested! Visit our Home page to browse them."
      ]
    },
  
    {
      pattern: /(.*)cookie|cookies(.*)/i,
      responses: [
        "You can find our delicious cookies at very affordable prices. Are you intrigued?"
      ]
    },
  
    {
      pattern: /(.*)croissant|croissants(.*)/i,
      responses: [
        "We have fresh croissants available daily! Would you like to check them out on our Home page?"
      ]
    },
  
    {
      pattern: /(.*)pancake|pancakes(.*)/i,
      responses: [
        "We have a variety of fluffy pancakes right here at our pastry shop — check them out on our website!"
      ]
    },
  
    {
      pattern: /(.*)scotched eggs(.*)/i,
      responses: [
        "We have tasty scotched eggs available in our store — perfect for breakfast or a snack!"
      ]
    },
  
    {
      pattern: /(.*)cheese puffs(.*)/i,
      responses: [
        "Fun fact — we have cheese puffs too! Visit our Home page to grab yours."
      ]
    },
  
    {
      pattern: /(.*)pastries|pastry(.*)/i,
      responses: [
        "We have many varieties of pastries waiting for you! Try them and send us your feedback. Thank you!"
      ]
    },
  
    {
      pattern: /(.*)deliveries(.*)/i,
      responses: [
        "For deliveries, we do free East Africa deliveries! For other countries, delivery charges apply."
      ]
    },
  
    {
      pattern: /(.*)contact(.*)/i,
      responses: [
        "You can contact us through:\n1. WhatsApp: 0759819560\n2. Instagram: @Lexxtpastry\n3. Facebook: @Lexxypastry_shop\nThank you!"
      ]
    },
  
    {
      pattern: /(.*)/i,
      responses: [
        "Sorry, I didn't understand that. Could you ask something else?",
        "Can you please clarify what you mean?"
      ]
    }
  ];
  