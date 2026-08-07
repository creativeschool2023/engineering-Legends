import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "archive": "Biographies",
        "about": "About",
        "stats": "Impact",
        "disciplines": "Disciplines",
        "voices": "Voices",
        "marvels": "Marvels",
        "conduct": "Code of Conduct",
        "backToHub": "Back to Hub",
        "join": "Join Network"
      },
      "hero": {
        "badge": "Connecting 25M+ Engineers Worldwide",
        "title1": "We Made the",
        "title2": "World Liveable",
        "title3": "For You",
        "subtitle": "Uniting brilliant minds across 195+ countries to innovate, collaborate, and shape the future of technology through rigorous structural mastery.",
        "explore": "Explore Platform",
        "demo": "Watch Demo"
      },
      "voices": {
        "badge": "Institutional Sentiment Repository",
        "title": "Engineer Voices",
        "titleItalic": "Real Stories",
        "subtitle": "From Reddit confessions to Twitter layoffs, LinkedIn struggles to YouTube success stories — hear directly from 1M+ engineers sharing their unfiltered experiences across every platform.",
        "stats": {
          "collected": "Voices Collected",
          "engagement": "X Impressions",
          "filters": "LinkedIn Posts",
          "verified": "YouTube Subscribers"
        },
        "platforms": {
          "headline": "Where Engineers Share Their Truth",
          "description": "Every platform tells a different story. Explore where engineers are most candid."
        },
        "modal": {
          "title": "Share Your Engineering Story",
          "subtitle": "Your voice matters. Your experience can help thousands of engineers.",
          "choosePlatform": "Where would you like to share your story?",
          "directSubmit": "Direct Submit",
          "successTitle": "Thank You for Sharing",
          "successText": "Your story has been received. We'll review it and may reach out for clarification."
        }
      }
    }
  },
  zh: {
    translation: {
      "nav": {
        "home": "首页",
        "archive": "人物传记",
        "about": "关于",
        "stats": "影响",
        "disciplines": "工程学科",
        "voices": "工程师之声",
        "marvels": "工程奇迹",
        "conduct": "行为准则",
        "backToHub": "返回中心",
        "join": "加入网络"
      },
      "hero": {
        "badge": "连接全球 2500 万+ 工程师",
        "title1": "我们让",
        "title2": "世界宜居",
        "title3": "为您服务",
        "subtitle": "团结 195+ 个国家的卓越头脑，通过严谨的结构驾驭能力进行创新、协作并塑造技术的未来。",
        "explore": "探索平台",
        "demo": "观看演示"
      },
      "voices": {
        "badge": "行业情感研究档案",
        "title": "工程师真实",
        "titleItalic": "心声与故事",
        "subtitle": "从 Reddit 的吐槽到 Twitter 的裁员，LinkedIn 的奋斗到 YouTube 的成功故事——直接聆听来自全球 100 万+ 工程师在各大平台上分享的真实、未经滤镜的体验。",
        "stats": {
          "collected": "收集到的心声",
          "engagement": "X 社交曝光量",
          "filters": "LinkedIn 发帖量",
          "verified": "YouTube 订阅量"
        },
        "platforms": {
          "headline": "工程师袒露真实心声的地方",
          "description": "每个平台都有不同的故事，探索工程师们最坦诚交流的社区。"
        },
        "modal": {
          "title": "分享您的工程故事",
          "subtitle": "您的心声至关重要。您的经验可以帮助成千上万的工程师。",
          "choosePlatform": "您想在哪个平台分享您的故事？",
          "directSubmit": "直接提交",
          "successTitle": "感谢您的分享",
          "successText": "我们的审核团队已收到您的故事，可能会与您联系核实以发布到公开档案中。"
        }
      }
    }
  },
  es: {
    translation: {
      "nav": {
        "home": "Inicio",
        "archive": "Biografías",
        "about": "Sobre Nosotros",
        "stats": "Impacto",
        "disciplines": "Disciplinas",
        "voices": "Voces",
        "marvels": "Maravillas",
        "conduct": "Código de Conducta",
        "backToHub": "Volver al Hub",
        "join": "Unirse a la Red"
      },
      "hero": {
        "badge": "Conectando a más de 25 millones de ingenieros en todo el mundo",
        "title1": "Hicimos el",
        "title2": "Mundo Habitable",
        "title3": "Para Ti",
        "subtitle": "Uniendo mentes brillantes en más de 195 países para innovar, colaborar y dar forma al futuro de la tecnología a través de un riguroso dominio estructural.",
        "explore": "Explorar Plataforma",
        "demo": "Ver Demo"
      },
      "voices": {
        "badge": "Repositorio de Sentimiento Institucional",
        "title": "Voces de Ingenieros",
        "titleItalic": "Historias Reales",
        "subtitle": "Desde confesiones en Reddit hasta despidos en Twitter, y los éxitos en YouTube. Escuche testimonios directos de más de 1M de ingenieros.",
        "stats": {
          "collected": "Voces Recopiladas",
          "engagement": "Impresiones en X",
          "filters": "Publicaciones LinkedIn",
          "verified": "Suscriptores YouTube"
        },
        "platforms": {
          "headline": "Donde los Ingenieros Comparten su Verdad",
          "description": "Cada plataforma cuenta una historia diferente. Explore dónde son más sinceros."
        },
        "modal": {
          "title": "Comparta su Historia",
          "subtitle": "Su voz es clave. Su experiencia ayuda a miles de ingenieros a salir adelante.",
          "choosePlatform": "¿Dónde le gustaría compartir su historia?",
          "directSubmit": "Envío Directo",
          "successTitle": "Gracias por Compartir",
          "successText": "Hemos recibido su testimonio. Lo revisaremos para incorporarlo a nuestro repositorio."
        }
      }
    }
  },
  de: {
    translation: {
      "nav": {
        "home": "Startseite",
        "archive": "Biografien",
        "about": "Über uns",
        "stats": "Einfluss",
        "disciplines": "Disziplinen",
        "voices": "Stimmen",
        "marvels": "Wunder",
        "conduct": "Verhaltenskodex",
        "backToHub": "Zurück zum Hub",
        "join": "Netzwerk beitreten"
      },
      "hero": {
        "badge": "Verbindung von über 25 Millionen Ingenieuren weltweit",
        "title1": "Wir haben die",
        "title2": "Welt lebenswert",
        "title3": "gemacht",
        "subtitle": "Vereinigung brillanter Köpfe aus über 195 Ländern, um durch konsequente strukturelle Meisterschaft Innovationen zu schaffen, zusammenzuarbeiten und die Zukunft der Technologie zu gestalten.",
        "explore": "Plattform erkunden",
        "demo": "Demo ansehen"
      },
      "voices": {
        "badge": "Institutionelles Stimmungsarchiv",
        "title": "Stimmen von Ingenieuren",
        "titleItalic": "Echte Berichte",
        "subtitle": "Von Reddit-Bekenntnissen bis Twitter-Entlassungen und YouTube-Erfolgen. Hören Sie Berichte von über einer Million Ingenieuren weltweit.",
        "stats": {
          "collected": "Gesammelte Stimmen",
          "engagement": "X Impressionen",
          "filters": "LinkedIn Beiträge",
          "verified": "YouTube Abonnenten"
        },
        "platforms": {
          "headline": "Wo Ingenieure die Wahrheit teilen",
          "description": "Jede Plattform erzählt eine eigene Geschichte. Lesen Sie, wo sie am ehrlichsten sind."
        },
        "modal": {
          "title": "Teilen Sie Ihre Geschichte",
          "subtitle": "Ihre Stimme zählt. Ihre Erfahrung kann unzähligen Ingenieuren helfen.",
          "choosePlatform": "Wo möchten Sie Ihre Geschichte teilen?",
          "directSubmit": "Direkt einreichen",
          "successTitle": "Vielen Dank fürs Teilen",
          "successText": "Ihre Geschichte wurde eingereicht. Wir prüfen Ihren Bericht sorgfältig."
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n;
