export const translations = {
  en: {
    // Header
    header: {
      features: "Features",
      forWhom: "Who It's For",
      pricing: "Pricing",
      howItWorks: "How It Works",
      faq: "FAQ",
      contacts: "Contacts",
      documents: "Documents",
      connectBot: "Connect Bot",
    },

    // Hero Section
    hero: {
      title: "Best LLM Models — Right in Telegram.",
      titleHighlight: "Simple and Fast.",
      subtitle: "OpenAI models in one bot, clear token limit and transparent pricing.",
      connectBot: "Connect Bot",
      viewPricing: "View Pricing",
      botLinkNote: "",
      chatExample: {
        query: "Create a 7-day Italy travel itinerary",
        response: "Day 1-2: Rome - Colosseum, Vatican, Trevi Fountain\nDay 3-4: Florence - Uffizi Gallery, Duomo Cathedral\nDay 5-7: Venice - St. Mark's Square, gondolas...",
        query2: "What documents do I need for the trip?",
      },
      tokensUsed: "Tokens used:",
    },

    // Why Section
    why: {
      title: "Why",
      titleBrand: "eazy GPT",
      subtitle: "Simple and convenient way to access the best AI models",
      benefits: [
        {
          title: "Quick start in Telegram",
          description: "No complex settings — just message the bot and get an answer",
        },
        {
          title: "Access to top models",
          description: "Use the best models from OpenAI for any task",
        },
        {
          title: "Transparent token limit",
          description: "Always see how many tokens you've used and how many are left",
        },
        {
          title: "Simple and convenient",
          description: "All AI power right in your favorite messenger",
        },
        {
          title: "Easy payment",
          description: "Simple and secure payment process",
        },
        {
          title: "24/7 Availability",
          description: "Access your AI assistant anytime, anywhere",
        },
      ],
    },

    // Features Section
    features: {
      title: "Features",
      subtitle: "Everything you need for effective AI work",
      main: [
        {
          title: "OpenAI Models",
          description: "Access to the latest and most powerful models from OpenAI",
        },
        {
          title: "Chat Mode in Telegram",
          description: "Ask questions and get answers right in the convenient Telegram interface",
        },
        {
          title: "Cost Control",
          description: "Track token usage in real-time with an indicator",
        },
      ],
      useCases: {
        title: "Use Cases",
        items: [
          "Writing code",
          "Creating texts",
          "Generating ideas",
          "Data analysis",
          "Document summaries",
          "Business emails",
        ],
      },
    },

    // For Whom Section
    forWhom: {
      title: "Who It's For",
      subtitle: "eazy GPT is useful for various tasks and professions",
      audiences: [
        {
          title: "Developers",
          description: "Explain code, find bugs, draft examples",
          example: '"Find the error in this function" or "Write a unit test for this class"',
        },
        {
          title: "Marketing & Content",
          description: "Post ideas, article drafts, content structures",
          example: '"10 ideas for a social media post about a new product" or "SEO article plan"',
        },
        {
          title: "Managers & Product",
          description: "Meeting summaries, sprint plans, requirements",
          example: '"Create a sprint plan based on these tasks" or "Write a user story for a feature"',
        },
        {
          title: "Analytics & Research",
          description: "Data summaries, comparisons, hypotheses",
          example: '"Analyze this sales data" or "Formulate a hypothesis for an A/B test"',
        },
        {
          title: "Study & Education",
          description: "Breaking down complex topics, preparing notes",
          example: '"Explain quantum physics in simple terms" or "Help create a term paper outline"',
        },
        {
          title: "Business & Communications",
          description: "Business letters, proposals, client texts",
          example: '"Write a letter to a partner" or "Create a commercial proposal"',
        },
      ],
      exampleLabel: "Example:",
    },

    // How It Works Section
    howItWorks: {
      title: "How It Works",
      subtitle: "Three simple steps to results",
      steps: [
        {
          title: "Connect the bot",
          description: "Start chatting with the bot in Telegram after purchasing a token package",
        },
        {
          title: "Write a query",
          description: "Send your question or task to the bot in the familiar messenger interface",
        },
        {
          title: "Get an answer",
          description: "Instantly receive results and see how many tokens were used",
        },
      ],
      examples: {
        title: "Dialog Examples",
        items: [
          {
            model: "OpenAI",
            query: "Create a chocolate cake recipe for 8 people",
            response: "Ingredients: 200g flour, 200g sugar, 100g cocoa...\nBake at 180°C for 35-40 minutes",
          },
          {
            model: "OpenAI",
            query: "Explain inflation in simple terms",
            response: "Inflation is the rise in prices for goods and services. When there's more money in the economy...",
          },
        ],
        queryLabel: "Query:",
        responseLabel: "Response:",
      },
    },

    // Pricing Section
    pricing: {
      title: "Pricing",
      subtitle: "One plan with access to all features",
      package: "Token Package",
      price: "$29",
      perTokens: "for 500,000 tokens",
      features: [
        "500,000 tokens",
        "Access to OpenAI models",
        "Transparent token counter",
        "24/7 bot availability",
        "Instant responses",
        "Easy to use",
      ],
      connectBot: "Connect Bot",
      tokensInfo: {
        title: "What are tokens?",
        description:
          "Tokens are the volume of text in queries and responses. Consumption depends on dialog length. Usually one token ≈ 0.75 words.",
        validity: "Token package is valid for 14 days from the date of purchase.",
      },
    },

    // FAQ Section
    faq: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to popular questions about working with eazy GPT",
      questions: [
        {
          question: "What models are available?",
          answer:
            "You get access to the best models from OpenAI for various tasks.",
        },
        {
          question: "What are tokens and how are they consumed?",
          answer:
            "Tokens are units of text volume measurement. They are consumed both by your queries and model responses. The longer the dialog, the more tokens are used. On average, one token ≈ 0.75 words. You always see the current consumption in the bot.",
        },
        {
          question: "What happens if tokens run out?",
          answer:
            "You can purchase additional token packages anytime. Detailed information about token top-up options will be specified in the public offer.",
        },
        {
          question: "How do I pay?",
          answer: "We accept various payment methods. Payment details will be provided during the connection process.",
        },
        {
          question: "How long is the token package valid?",
          answer:
            "Token packages are valid for 14 days from the date of purchase. Use your tokens within this period.",
        },
      ],
    },

    // Documents Section
    documents: {
      title: "Documents",
      subtitle: "Review the service terms of use",
      publicOffer: {
        title: "Public Offer",
        description: "Service provision terms and usage rules",
        button: "Open Document",
      },
      privacyPolicy: {
        title: "Privacy Policy",
        description: "Personal data protection information",
        button: "Open Document",
      },
    },

    // Contacts Section
    contacts: {
      title: "Contacts",
      subtitle: "Have questions? Contact us",
      company: "Development Company",
      companyName: "HONG KONG ZHONGHE TRADING LIMITED",
      email: "Email",
      emailAddress: "cortexa.kg@gmail.com",
      address: "Address",
      addressFull: "RM 1710, 17/F, THE CLOUD, 111 TUNG CHAU STREET, TAI KOK TSUI, HONG KONG",
      registrationNo: "Company Registration No.",
      registrationValue: "78295194",
      businessRegNo: "Business Reg. No.",
      businessRegValue: "78295194-000-06-25-7",
    },

    // Footer
    footer: {
      description: "Best LLM models right in Telegram. Simple, fast, and convenient.",
      contacts: "Contacts",
      companyName: "HONG KONG ZHONGHE TRADING LIMITED",
      documents: "Documents",
      publicOffer: "Public Offer",
      privacyPolicy: "Privacy Policy",
      copyright: "All rights reserved.",
    },
  },

  ru: {
    // Header
    header: {
      features: "Возможности",
      forWhom: "Для кого",
      pricing: "Тариф",
      howItWorks: "Как работает",
      faq: "FAQ",
      contacts: "Контакты",
      documents: "Документы",
      connectBot: "Подключить бота",
    },

    // Hero Section
    hero: {
      title: "Лучшие LLM-модели — прямо в Telegram.",
      titleHighlight: "Просто и быстро.",
      subtitle: "Модели OpenAI в одном боте, понятный лимит токенов и прозрачная оплата.",
      connectBot: "Подключить бота",
      viewPricing: "Посмотреть тариф",
      botLinkNote: "",
      chatExample: {
        query: "Составь маршрут путешествия по Италии на 7 дней",
        response: "День 1-2: Рим - Колизей, Ватикан, фонтан Треви\nДень 3-4: Флоренция - Галерея Уффици, собор Дуомо\nДень 5-7: Венеция - площадь Сан-Марко, гондолы...",
        query2: "Какие документы нужны для поездки?",
      },
      tokensUsed: "Использовано токенов:",
    },

    // Why Section
    why: {
      title: "Почему",
      titleBrand: "eazy GPT",
      subtitle: "Простой и удобный способ получить доступ к лучшим AI-моделям",
      benefits: [
        {
          title: "Быстрый старт в Telegram",
          description: "Никаких сложных настроек — просто напишите боту и получите ответ",
        },
        {
          title: "Доступ к топовым моделям",
          description: "Используйте лучшие модели от OpenAI для любых задач",
        },
        {
          title: "Прозрачный лимит токенов",
          description: "Всегда видите, сколько токенов использовали и сколько осталось",
        },
        {
          title: "Просто и удобно",
          description: "Вся мощь AI прямо в вашем любимом мессенджере",
        },
        {
          title: "Удобная оплата",
          description: "Простой и безопасный процесс оплаты",
        },
        {
          title: "Доступность 24/7",
          description: "Доступ к вашему AI-помощнику в любое время и в любом месте",
        },
      ],
    },

    // Features Section
    features: {
      title: "Возможности",
      subtitle: "Всё необходимое для эффективной работы с AI",
      main: [
        {
          title: "Модели OpenAI",
          description: "Доступ к новейшим и мощнейшим моделям от OpenAI",
        },
        {
          title: "Чат-режим в Telegram",
          description: "Задавайте вопросы и получайте ответы прямо в удобном интерфейсе Telegram",
        },
        {
          title: "Контроль расходов",
          description: "Отслеживайте использование токенов в реальном времени с помощью индикатора",
        },
      ],
      useCases: {
        title: "Сценарии применения",
        items: [
          "Написание кода",
          "Создание текстов",
          "Генерация идей",
          "Анализ данных",
          "Резюме документов",
          "Деловые письма",
        ],
      },
    },

    // For Whom Section
    forWhom: {
      title: "Для кого",
      subtitle: "eazy GPT полезен для самых разных задач и профессий",
      audiences: [
        {
          title: "Разработчики",
          description: "Объяснить код, найти баг, набросать пример",
          example: "«Найди ошибку в этой функции» или «Напиши unit-тест для этого класса»",
        },
        {
          title: "Маркетинг и контент",
          description: "Идеи для постов, черновики статей, структуры контента",
          example: "«10 идей для поста в соцсетях про новый продукт» или «План статьи про SEO»",
        },
        {
          title: "Менеджеры и продакт",
          description: "Саммари встреч, планы спринтов, требования",
          example: "«Составь план спринта на основе этих задач» или «Напиши user story для функции»",
        },
        {
          title: "Аналитики и исследования",
          description: "Сводки данных, сравнения, гипотезы",
          example: "«Проанализируй эти данные продаж» или «Сформулируй гипотезу для A/B теста»",
        },
        {
          title: "Учёба и образование",
          description: "Разбор сложных тем, подготовка конспектов",
          example: "«Объясни простыми словами квантовую физику» или «Помоги составить план курсовой»",
        },
        {
          title: "Бизнес и коммуникации",
          description: "Деловые письма, предложения, тексты для клиентов",
          example: "«Напиши письмо партнёру» или «Составь коммерческое предложение»",
        },
      ],
      exampleLabel: "Пример:",
    },

    // How It Works Section
    howItWorks: {
      title: "Как работает",
      subtitle: "Три простых шага до результата",
      steps: [
        {
          title: "Подключаете бота",
          description: "Начните общаться с ботом в Telegram после покупки пакета токенов",
        },
        {
          title: "Пишете запрос",
          description: "Отправьте ваш вопрос или задачу боту в привычном интерфейсе мессенджера",
        },
        {
          title: "Получаете ответ",
          description: "Моментально получаете результат и видите, сколько токенов использовано",
        },
      ],
      examples: {
        title: "Примеры диалогов",
        items: [
          {
            model: "OpenAI",
            query: "Составь рецепт шоколадного торта на 8 персон",
            response: "Ингредиенты: 200г муки, 200г сахара, 100г какао...\nВыпекать при 180°C 35-40 минут",
          },
          {
            model: "OpenAI",
            query: "Объясни простыми словами, как работает инфляция",
            response: "Инфляция - это рост цен на товары и услуги. Когда в экономике становится больше денег...",
          },
        ],
        queryLabel: "Запрос:",
        responseLabel: "Ответ:",
      },
    },

    // Pricing Section
    pricing: {
      title: "Тариф",
      subtitle: "Один тариф с доступом ко всем возможностям",
      package: "Пакет токенов",
      price: "2500 ₽",
      perTokens: "за 500 000 токенов",
      features: [
        "500 000 токенов",
        "Доступ к моделям OpenAI",
        "Прозрачный счётчик токенов",
        "Доступность бота 24/7",
        "Мгновенные ответы",
        "Простота использования",
      ],
      connectBot: "Подключить бота",
      tokensInfo: {
        title: "Что такое токены?",
        description:
          "Токены — это объём текста в запросах и ответах. Расход зависит от длины диалога. Обычно один токен ≈ 0,75 слова.",
        validity: "Пакет токенов действует 14 дней с момента покупки.",
      },
    },

    // FAQ Section
    faq: {
      title: "Часто задаваемые вопросы",
      subtitle: "Ответы на популярные вопросы о работе с eazy GPT",
      questions: [
        {
          question: "Какие модели доступны?",
          answer:
            "Вы получаете доступ к лучшим моделям от OpenAI для различных задач.",
        },
        {
          question: "Что такое токены и как они расходуются?",
          answer:
            "Токены — это единицы измерения объёма текста. Они расходуются как на ваши запросы, так и на ответы моделей. Чем длиннее диалог, тем больше токенов используется. В среднем один токен ≈ 0,75 слова. Вы всегда видите текущий расход в боте.",
        },
        {
          question: "Что будет, если токены закончатся?",
          answer:
            "Вы можете приобрести дополнительные пакеты токенов в любое время. Подробная информация о возможностях докупки будет указана в публичной оферте.",
        },
        {
          question: "Как произвести оплату?",
          answer: "Мы принимаем различные способы оплаты. Детали оплаты будут предоставлены в процессе подключения.",
        },
        {
          question: "Как долго действует пакет токенов?",
          answer:
            "Пакеты токенов действуют 14 дней с момента покупки. Используйте токены в течение этого периода.",
        },
      ],
    },

    // Documents Section
    documents: {
      title: "Документы",
      subtitle: "Ознакомьтесь с условиями использования сервиса",
      publicOffer: {
        title: "Публичная оферта",
        description: "Условия предоставления услуг и правила использования",
        button: "Открыть документ",
      },
      privacyPolicy: {
        title: "Политика обработки данных",
        description: "Информация о защите персональных данных",
        button: "Открыть документ",
      },
    },

    // Contacts Section
    contacts: {
      title: "Контакты",
      subtitle: "Есть вопросы? Свяжитесь с нами",
      company: "Компания-разработчик",
      companyName: "HONG KONG ZHONGHE TRADING LIMITED",
      email: "Email",
      emailAddress: "cortexa.kg@gmail.com",
      address: "Адрес",
      addressFull: "RM 1710, 17/F, THE CLOUD, 111 TUNG CHAU STREET, TAI KOK TSUI, HONG KONG",
      registrationNo: "Регистрационный номер компании",
      registrationValue: "78295194",
      businessRegNo: "Бизнес рег. номер",
      businessRegValue: "78295194-000-06-25-7",
    },

    // Footer
    footer: {
      description: "Лучшие LLM-модели прямо в Telegram. Просто, быстро и удобно.",
      contacts: "Контакты",
      companyName: "HONG KONG ZHONGHE TRADING LIMITED",
      documents: "Документы",
      publicOffer: "Публичная оферта",
      privacyPolicy: "Политика обработки данных",
      copyright: "Все права защищены.",
    },
  },
} as const

export type Language = keyof typeof translations
export type TranslationKey = keyof (typeof translations)["en"]
