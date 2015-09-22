var Backbone = require('backbone');

/* use BCP 47 language tags as the key for each language http://www.iana.org/assignments/language-subtag-registry/language-subtag-registry */

module.exports = Backbone.Model.extend({
  defaults: {
    languages: [
      {
        langName: "English",
        langCode: "en",
        /* Use capitalized keys for widely reused text that must be capitalized */
        Next: "Next",
        Back: "Back",
        Skip: "Skip",
        Done: "Done",
        Cancel: "Cancel",
        Sell: "Sell",
        New: "New",
        Item: "Item",
        Items: "Items",
        Stores: "Stores",
        Follow: "Follow",
        About: "About",
        Followers: "Followers",
        Following: "Following",
        Store: "Store",
        Edit: "Edit",
        Delete: "Delete",
        Website: "Website",
        Welcome: "Welcome to OpenBazaar",
        CreateStore: "Create store",
        SearchForItemsPlaceholder: "Search for items",
        Email: "Email",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Snapchat: "Snapchat",
        BUYNOW: "BUY NOW",
        Description: "Description",
        Reviews: "Reviews",
        Shipping: "Shipping",
        Returns: "Returns",
        Ampersand: "&",
        ShipsFrom: "Ships From",
        ShipsTo: "Ships To",
        Customize: "Customize",
        Save: "Save",
        Changes: "Changes",
        All: "All",
        Name: "Name",
        Price: "Price",
        Available: "Available",
        Keywords: "Keywords",
        Type: "Type",
        Condition: "Condition",
        NSFW: "NSFW",
        Local: "Local",
        International: "International",
        Time: "Time",
        Free: "Free",
        Category: "Category",
        ProcessingTime: "Processing Time",
        UploadPhotos: "Upload Photos",
        DragOrUploadPhotos: "Drag or upload photos",
        ExpirationDate: "Expiration Date",
        nav: {
          searchPlaceholder: "Enter handle or search",
          myPage: "My Page",
          customizePage:"Customize Page",
          sellItem:"Sell Item",
          purchases:"Purchases",
          sales:"Sales",
          cases:"Cases",
          notifications:"Notifications",
          settings:"Settings",
          about:"About OpenBazaar",
          support:"Support OpenBazaar"
        },
        onboarding: {
          intro: "OpenBazaar is a permissionless market for the world to buy and sell online without fees",
          chooseLanguage: "Choose your language",
          contributors: "%{smart_count} Contributor |||| %{smart_count} Contributors",
          configure: "Configure your experience",
          disclaimer_title: "Disclaimer",
          disclaimer_body: "OpenBazaar is a network for trading goods and services directly between people - using Bitcoin - without any central organization controlling the platform. This means you are responsible for your own activity on the network.<br /><br />OpenBazaar users are not anonymous by default. Most communications between parties are encrypted, but IP addresses are public and can be associated with activity on the network. Malicious parties could use this information against you; protecting your privacy is your own responsibility.<br /><br />OpenBazaar users must ahdere to the laws in their own legal jurisdiction as well as their conscience. The OpenBazaar developers do not condone - and are not responsible for - any use of the platform for illegal activity.<br /><br />The OpenBazaar community of developers has worked hard to deliver a free platform for trade to the world. But as with any software, bugs will be found. The developers are not responsible for any monetary loss associated with problems in the software.<br /><br />By using OpenBazaar you're responsible for your own actions on the OpenBazaar network.",
          yourCountry: "Your country",
          localCurrency: "Local currency",
          LanguagePlaceholder: "Search for a language",
          CountryPlaceholder: "Search for a country",
          CurrencyPlaceholder: "Search for a currency",
          TimezonePlaceholder: "Search for a time zone",
          timeZone: "Time zone",
          handle: "Handle",
          knownAs: "You're currently known as:",
          wouldYou: "Would you like to register an easy to remember handle?",
          registerNew: "Register New",
          connectExisting: "Connect Existing",
          avatar: "Avatar",
          chooseAvatar: "Choose avatar"
        }
      },
      {
        langName: "Spanish",
        langCode: "sp",
        /* this is just for reference. It was created by Google translate, and is probably very inaccurate. */
        Next: "en Siguiente",
        Back: "Atr�s",
        Skip: "Omitir",
        Done: "Hecho",
        Cancel: "Cancelar",
        Sell: "Vender",
        New: "Nuevo",
        Item: "Art�culo",
        Items: "Art�culos",
        Stores: "Tiendas",
        Follow: "Seguir",
        About: "Acerca de",
        Followers: "Seguidores",
        Following: "Despu�s",
        Store: "Tienda",
        Edit: "Editar",
        Delete: "Borrar",
        Website: "Sitio Web",
        Welcome: "", 
        CreateStore: "",
        SearchForItemsPlaceholder: "",
        Email: "Correo electr�nico",
        Facebook: "Facebook",
        Instagram: "Instagram",
        Snapchat: "Snapchat",
        BUYNOW: "COMPRA AHORA",
        Description: "Descripci�n",
        Reviews: "Cr�ticas",
        Shipping: "Env�o",
        Returns: "Devoluciones",
        Ampersand: "y",
        ShipsFrom: "Ships From",
        ShipsTo: "Realiza env�os a",
        Customize: "Personaliza",
        Save: "Guardar",
        Changes: "Cambios",
        All: "Todo",
        Name: "Nombre",
        Price: "Precio",
        Available: "Disponible",
        Keywords: "Palabras claves",
        Type: "Tipo",
        Condition: "Condici�n",
        NSFW: "NSFW",
        Local: "Local",
        International: "Internacional",
        Time: "Hora",
        Free: "Gratis",
        Category: "Categor�a",
        ProcessingTime: "Tiempo de procesamiento",
        UploadPhotos: "Subir fotos",
        DragOrUploadPhotos: "Arrastre o subir fotos",
        ExpirationDate: "Fecha de caducidad",
        nav: {
          searchPlaceholder: "Introduzca un mango o una palabra clave",
          myPage: "Mi p�gina",
          customizePage:"Personalizar P�gina",
          sellItem:"Venta de art�culos",
          purchases:"Las compras",
          sales:"Ventas",
          cases:"Casos",
          notifications:"Notificaciones",
          settings:"Ajustes",
          about:"Acerca OpenBazaar",
          support:"Soporte OpenBazaar"
        },
        onboarding: {
          intro: "OpenBazaar es un proyecto de c�digo abierto creado por cientos de personas con el objetivo principal de dar la libre comercio mundial",
          chooseLanguage: "Elige tu idioma",
          contributors: "%{smart_count} Colaboradores |||| %{smart_count} Colaboradores",
          configure: "Configure su Experiencia",
          disclaimer_title: "Nota Legal",
          disclaimer_body: "disclaimer text",
          yourCountry: "Tu pa�s",
          localCurrency: "Moneda Local",
          LanguagePlaceholder: "",
          CountryPlaceholder: "",
          CurrencyPlaceholder: "",
          TimezonePlaceholder: "",
          timeZone: "Zona Horaria",
          handle: "Apodo",
          knownAs: "Est�s conocido como:",
          wouldYou: "�Quieres registrar una f�cil de recordar manejar?",
          registerNew: "Registrar Nuevo",
          connectExisting: "Conecte Existente",
          avatar: "Avatar",
          chooseAvatar: "Elija Avatar"
        }
      }
    ]
  }
});