var levels = [

  // 1
  {
    helpTitle : "Sélectionner les éléments par leur type",
    selectorName : "Sélecteur de type",
    doThis : "Sélectionnes les assiettes",
    selector : "assiette",
    syntax : "A",
    help : "Sélectionne tous les éléments du type <strong>A</strong>. Le type fait référence au type de la balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont trois types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <assiette/>
    <assiette/>
    `
  },

  // 2
  {
    doThis : "Sélectionnes les boîtes à bento",
    selector : "bento",
    syntax : "A",
    helpTitle : "Sélectionner les éléments par leur type",
    selectorName : "Sélecteur de type",
    help : "Sélectionne tous les éléments du type <strong>A</strong>. Le type fait référence au type de la balise, donc <tag>div</tag>, <tag>p</tag> et <tag>ul</tag> sont trois types d'éléments différents.",
    examples : [
      '<strong>div</strong> sélectionne tous les éléments <tag>div</tag>.',
      '<strong>p</strong> sélectionne tous les éléments <tag>p</tag>.',
    ],
    boardMarkup: `
    <bento/>
    <assiette/>
    <bento/>
    `
  },

  // 3
  {
    doThis : "Sélectionnes l'assiette colorée",
    selector : "#coloree",
    selectorName: "Le sélecteur #ID",
    helpTitle: "Sélectionner un élément par son ID",
    syntax: "#id",
    help : "Sélectionnes un élement avec un <strong>id</strong> spécifique. Tu peux aussi combiner le sélecteur ID avec le sélecteur de type.",
    examples : [
      `<strong>#cool</strong> sélectionne l'élément <strong>id="cool"</strong>`,
      `<strong>ul#long</strong> sélectionne l'élément <tag>ul id="long"</tag>`,
    ],
    boardMarkup : `
    <assiette id="coloree"/>
    <assiette/>
    <bento/>
    `
  },

  // 4
  {
    helpTitle: "Sélectionnes un élément qui est sur un autre élément",
    selectorName : "Les sélecteurs descendants",
    doThis : "Sélectionnes la pomme sur l'assiette",
    selector : "assiette pomme",
    syntax: "A&nbsp;&nbsp;B",
    help : "sélectionnes tous <strong>B</strong> qui est sur <strong>A</strong>. <strong>B</strong> est appelé un descendant car il est dans un autre élement <strong>A</strong>.",
    examples : [
      '<strong>p&nbsp;&nbsp;strong</strong> sélectionnes tous les éléments <tag>strong</tag>qui sont dans tous les éléments <tag>p</tag>',
      `<strong>#coloree&nbsp;&nbsp;span</strong> sélectionnes tous les éléments <tag>span</tag> qui sont dans l'élément <strong>id="coloree"</strong>`,
    ],
    boardMarkup : `
    <bento/>
    <assiette>
      <pomme/>
    </assiette>
    <pomme/>
    `
  },

  // 5
  {
    doThis : "Sélectionnes le cornichon dans l'assiette colorée",
    selector : "#coloree cornichon",
    helpTitle: "Combiner les sélecteurs descendants et les #ID",
    syntax: "#id&nbsp;&nbsp;A",
    help : 'Tu peux combiner tous les sélecteurs avec les sélecteurs descendant.',
    examples : [
      `<strong>#cool&nbsp;span</strong> sélectionne tous les éléments <tag>span</tag> qui sont dans l'élément qui a pour id <strong>id="cool"</strong>`
    ],
    boardMarkup : `
    <bento>
    <orange/>
    </bento>
    <assiette id="coloree">
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    `
  },

  // 6
  {
    doThis : "Sélectionnes les petites pommes",
    selector : ".small",
    selectorName: "Les sélecteurs de classes",
    helpTitle: "Sélectionner un élément grâce à sa classe",
    syntax: ".nomdelaclasse",
    help : "Le sélecteur de classe sélectionne tous les éléments ayant cet attribut de classe. Les éléments ne peuvent avoir qu'un seul ID, mais plusieurs classes.",
    examples : [
    '<strong>.neato</strong> sélectionne tous les éléments avec la classe neato <strong>class="neato"</strong>'
    ],
    boardMarkup : `
    <pomme/>
    <pomme class="small"/>
    <assiette>
      <pomme class="small"/>
    </assiette>
    <assiette/>
    `
  },

  // 7
  {
    doThis : "Sélectionnes les petites oranges",
    selector : "orange.small",
    helpTitle: "Combines plusieurs sélecteurs CSS !",
    syntax: "A.nomdelaclasse",
    help : "Tu peux combiner le sélecteur de classe avec d’autres sélecteurs, comme le sélecteur de type.",
    examples : [
      '<strong>ul.important</strong> sélectionne tous les éléments <tag>ul</tag> qui ont aussi la classe <strong>class="important"</strong>',
      `<strong>#big.wide</strong> sélectionne l'élement avec un ID <strong>id="big"</strong> qui a aussi la classe <strong>class="wide"</strong>`
    ],
    boardMarkup :`
    <pomme/>
    <pomme class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <assiette>
      <orange/>
    </assiette>
    <assiette>
      <orange class="small"/>
    </assiette>`
  },

  // 8
  {
    doThis : "Sélectionnes les petites oranges dans les bentos",
    selector : "bento orange.small",
    syntax: "Utilises ce que tu as déjà vu !",
    helpTitle: "Tu peux le faire !",
    help : "Combines ce que tu as appris dans les derniers niveaux pour résoudre celui-ci !",
    boardMarkup : `
    <bento>
      <orange/>
    </bento>
    <orange class="small"/>
    <bento>
      <orange class="small"/>
    </bento>
    <bento>
      <pomme class="small"/>
    </bento>
    <bento>
      <orange class="small"/>
    </bento>
    `
  },

  // 9
  {
    doThis : "Sélectionnes toutes les assiettes et tous les bentos",
    selector : "assiette,bento",
    selectorName : "Combiner avec une virgule",
    helpTitle: "Combines les sélecteurs grâce à la virgule !",
    syntax : "A, B",
    help : "Grâce à la technologie Shatner, ce système sélectionne tous les éléments <strong>A</strong> et <strong>B</strong>. Vous pouvez combiner n’importe quel sélecteur de cette façon, et vous pouvez en spécifier plus de deux.",
    examples: [
    '<strong>p, .fun</strong> sélectionne tous les éléments <tag>p</tag> et aussi tous les éléments avec la classe <strong>class="fun"</strong>',
    '<strong>a, p, div</strong> sélectionne tous les éléments <tag>a</tag>, tous les élements <tag>p</tag> et aussi les éléments <tag>div</tag>'
    ],
    boardMarkup : `
    <cornichon class="small"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <bento>
      <cornichon/>
    </bento>
    <assiette>
      <cornichon/>
    </assiette>
    <cornichon/>
    <cornichon class="small"/>
    `
  },

  // 9
  {
    doThis : "Sélectionnes tout !",
    selector : "*",
    selectorName:  "Le sélecteur universel",
    helpTitle: "Il permet de tout sélectionner !",
    syntax : "*",
    help : 'Tu peux sélectionner tous les éléments de la page grâce à ce sélecteur ! ',
    examples : [
      "<strong>p *</strong> sélectionnes tous les éléments qui sont dans l'élément <tag>p</tag>.",
    ],
    boardMarkup : `
    <pomme/>
    <assiette>
      <orange class="small" />
    </assiette>
    <bento/>
    <bento>
      <orange/>
    </bento>
    <assiette id="coloree"/>
    `
  },

  
  {
    doThis : "Select everything on a assiette",
    selector : "assiette *",
    syntax : "A&nbsp;&nbsp;*",
    helpTitle: "Combine the Universal Selector",
    help : 'This sélectionne tous éléments inside of <strong>A</strong>.',
    examples : [
      '<strong>p *</strong> selects every element inside all <tag>p</tag> éléments.',
      '<strong>ul.coloree *</strong> selects every element inside all <tag>ul class="coloree"</tag> éléments.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <orange class="small"/>
    </assiette>
    <assiette>
      <cornichon/>
    </assiette>
    <pomme class="small"/>
    <assiette>
      <pomme/>
    </assiette>`
  },
  {
    doThis : "Select every pomme that's next to a assiette",
    selector : "assiette + pomme",
    helpTitle: "Select an element that directly follows another element",
    selectorName: "Adjacent Sibling Selector",
    syntax : "A + B",
    help : "This sélectionne tous <strong>B</strong> éléments that directly follow <strong>A</strong>. éléments that follow one another are called siblings. They're on the same level, or depth. <br/><br/>In the HTML markup for this level, éléments that have the same indentation are siblings.",
    examples : [
      '<strong>p + .intro</strong> selects every element with <strong>class="intro"</strong> that directly follows a <tag>p</tag>',
      '<strong>div + a</strong> selects every <tag>a</tag> element that directly follows a <tag>div</tag>'
    ],
    boardMarkup : `
    <bento>
      <pomme class="small"/>
    </bento>
    <assiette />
    <pomme class="small"/>
    <assiette />
    <pomme/>
    <pomme class="small"/>
    <pomme class="small"/>
    `
  },
  {
    selectorName: "General Sibling Selector",
    helpTitle: "Select éléments that follows another element",
    syntax: "A ~ B",
    doThis : "Select the cornichons beside the bento",
    selector : "bento ~ cornichon",
    help : "You can select all siblings of an element that follow it. This is like the Adjacent Selector (A + B) except it gets all of the following éléments instead of one.",
    examples : [
      '<strong>A ~ B</strong> sélectionne tous <strong>B</strong> that follow a <strong>A</strong>'
    ],
    boardMarkup : `
    <cornichon/>
    <bento>
      <orange class="small"/>
    </bento>
    <cornichon class="small"/>
    <cornichon/>
    <assiette>
      <cornichon/>
    </assiette>
    <assiette>
      <cornichon class="small"/>
    </assiette>
    `
  },
  {
    selectorName: "Child Selector",
    syntax: "A > B&nbsp;",
    doThis : "Select the pomme directly on a assiette",
    selector : "assiette > pomme",
    helpTitle: "Select direct children of an element",
    help : "You can select éléments that are direct children of other éléments. A child element is any element that is nested directly in another element. <br><br>éléments that are nested deeper than that are called descendant éléments.",
    examples : [
      '<strong>A > B</strong> sélectionne tous <strong>B</strong> that are a direct children <strong>A</strong>'
    ],
    boardMarkup: `
    <assiette>
      <bento>
        <pomme/>
      </bento>
    </assiette>
    <assiette>
      <pomme/>
    </assiette>
    <assiette/>
    <pomme/>
    <pomme class="small"/>
    `
  },
  {
    selectorName: "First Child Pseudo-selector",
    helpTitle: "Select a first child element inside of another element",
    doThis : "Select the top orange",
    selector : "assiette :first-child",
    syntax: ":first-child",

    help : "You can select the first child element. A child element is any element that is directly nested in another element. You can combine this pseudo-selector with other selectors.",
    examples : [
      '<strong>:first-child</strong> sélectionne tous first child éléments.',
      '<strong>p:first-child</strong> sélectionne tous first child <tag>p</tag> éléments.',
      '<strong>div p:first-child</strong> sélectionne tous first child <tag>p</tag> éléments that are in a <tag>div</tag>.'
    ],
    boardMarkup :`
    <bento/>
    <assiette />
    <assiette>
      <orange />
      <orange />
      <orange />
    </assiette>
    <cornichon class="small" />
    `
  },
  {
    selectorName: "Only Child Pseudo-selector",
    helpTitle: "Select an element that are the only element inside of another one.",
    doThis : "Select the pomme and the cornichon on the assiettes",
    selector : "assiette :only-child",
    syntax: ":only-child",
    help : "You can select any element that is the only element inside of another one.",
    examples : [
      '<strong>span:only-child</strong> selects the <tag>span</tag> éléments that are the only child of some other element.',
      '<strong>ul li:only-child</strong> selects the only <tag>li</tag> element that are in a <tag>ul</tag>.'
    ],
    boardMarkup : `
    <assiette>
      <pomme/>
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    <bento>
      <cornichon />
    </bento>
    <assiette>
      <orange class="small"/>
      <orange/>
    </assiette>
    <cornichon class="small"/>
    `
  },
  {
    selectorName: "Last Child Pseudo-selector",
    helpTitle: "Select the last element inside of another element",
    doThis : "Select the small pomme and the cornichon",
    selector : ".small:last-child",
    syntax: ":last-child",
    help : "You can use this selector to select an element that is the last child element inside of another element. <br><br>Pro Tip &rarr; In cases where there is only one element, that element counts as the first-child, only-child and last-child!",
    examples : [
      '<strong>:last-child</strong> sélectionne tous last-child éléments.',
      '<strong>span:last-child</strong> sélectionne tous last-child <tag>span</tag> éléments.',
      '<strong>ul li:last-child</strong> selects the last <tag>li</tag> éléments inside of any <tag>ul</tag>.'
    ],
    boardMarkup : `
    <assiette id="coloree">
      <pomme class="small"/>
    </assiette>
    <assiette/>
    <assiette>
      <orange class="small"/>
      <orange>
    </assiette>
    <cornichon class="small"/>`
  },
  {
    selectorName: "Nth Child Pseudo-selector",
    helpTitle: "Select an element by its order in another element",
    doThis : "Select the 3rd assiette",
    selector : ":nth-child(3)",
    syntax: ":nth-child(A)",
    help : "Selects the <strong>nth</strong> (Ex: 1st, 3rd, 12th etc.) child element in another element.",
    examples : [
      '<strong>:nth-child(8)</strong> selects every element that is the 8th child of another element.',
      '<strong>div p:nth-child(2)</strong> selects the second <strong>p</strong> in every <strong>div</strong>',
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="coloree"/>
    `
  },
  {
    selectorName: "Nth Last Child Selector",
    helpTitle: "Select an element by its order in another element, counting from the back",
    doThis : "Select the 1st bento",
    selector : "bento:nth-last-child(3)",
    syntax: ":nth-last-child(A)",
    help : "Selects the children from the bottom of the parent. This is like nth-child, but counting from the back!",
    examples : [
      '<strong>:nth-last-child(2)</strong> sélectionne tous second-to-last child éléments.'
    ],
    boardMarkup: `
    <assiette/>
    <bento/>
    <assiette>
      <orange/>
      <orange/>
      <orange/>
    </assiette>
    <bento/>
    `
  },
  {
    selectorName: "First of Type Selector",
    helpTitle: "Select the first element of a specific type",
    doThis : "Select first pomme",
    selector : "pomme:first-of-type",
    syntax: ":first-of-type",
    help : "Selects the first element of that type within another element.",
    examples : [
      '<strong>span:first-of-type</strong> selects the first <tag>span</tag> in any element.'
    ],
    boardMarkup: `
    <orange class="small"/>
    <pomme/>
    <pomme class="small"/>
    <pomme/>
    <pomme class="small"/>
    <assiette>
      <orange class="small"/>
      <orange/>
    </assiette>
    `
  },
  {
    selectorName: "Nth of Type Selector",
    doThis: "Select all even assiettes",
    selector: "assiette:nth-of-type(even)",
    syntax: ":nth-of-type(A)",
    help: "Selects a specific element based on its type and order in another element - or even or odd instances of that element.",
    examples: [
      '<strong>div:nth-of-type(2)</strong> selects the second instance of a div.',
      '<strong>.example:nth-of-type(odd)</strong> sélectionne tous odd instances of a the example class.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette/>
    <assiette id="coloree"/>
    <assiette/>
    `
  },
  {
    selectorName: "Nth-of-type Selector with Formula",
    doThis: "Select every 2nd assiette, starting from the 3rd",
    selector: "assiette:nth-of-type(2n+3)",
    syntax: ":nth-of-type(An+B)",
    help: "The nth-of-type formula selects every nth element, starting the count at a specific instance of that element.",
    examples: [
      '<strong>span:nth-of-type(6n+2)</strong> selects every 6th instance of a <tag>span</tag>, starting from (and including) the second instance.'
    ],
    boardMarkup : `
    <assiette/>
    <assiette>
      <cornichon class="small" />
    </assiette>
    <assiette>
      <pomme class="small" />
    </assiette>
    <assiette/>
    <assiette>
      <pomme />
    </assiette>
    <assiette/>
    `
  },
  {
    selectorName: "Only of Type Selector",
    helpTitle: "Select éléments that are the only ones of their type within their parent element",
    selector : "pomme:only-of-type",
    syntax: ":only-of-type",
    doThis : "Select the pomme on the middle assiette",
    help : "Selects the only element of its type within another element.",
    examples : [
      '<strong>p span:only-of-type</strong> selects a <tag>span</tag> within any <tag>p</tag> if it is the only <tag>span</tag> in there.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <pomme class="small" />
      <pomme />
    </assiette>
    <assiette>
      <pomme class="small" />
    </assiette>
    <assiette>
      <cornichon />
    </assiette>
    `
  },
  {
    selectorName: "Last of Type Selector",
    helpTitle: "Select the last element of a specific type",
    doThis : "Select the last pomme and orange",
    selector : ".small:last-of-type",
    syntax: ":last-of-type",
    help : "Selects each last element of that type within another element. Remember type refers the kind of tag, so <tag>p</tag> and <tag>span</tag> are different types. <br><br> I wonder if this is how the last dinosaur was selected before it went extinct.",
    examples : [
      '<strong>div:last-of-type</strong> selects the last <tag>div</tag> in every element.',
      '<strong>p span:last-of-type</strong> selects the last <tag>span</tag> in every <tag>p</tag>.'
    ],
    boardMarkup : `
    <orange class="small"/>
    <orange class="small" />
    <cornichon />
    <cornichon />
    <pomme class="small" />
    <pomme class="small" />
    `
  },
  {
    selectorName: "Empty Selector",
    helpTitle: "Select éléments that don't have children",
    doThis : "Select the empty bentos",
    selector : "bento:empty",
    syntax: ":empty",
    help : "Selects éléments that don't have any other éléments inside of them.",
    examples : [
      '<strong>div:empty</strong> sélectionne tous empty <tag>div</tag> éléments.'
    ],
    boardMarkup:`
    <bento/>
    <bento>
      <cornichon class="small"/>
    </bento>
    <assiette/>
    <bento/>`
  },
  {
    selectorName: "Negation Pseudo-class",
    helpTitle: "Select all éléments that don't match the negation selector",
    doThis : "Select the big pommes",
    selector : "pomme:not(.small)",
    syntax: ":not(X)",
    help : 'You can use this to select all éléments that do not match selector <strong>"X"</strong>.',
    examples : [
      '<strong>:not(#coloree)</strong> sélectionne tous éléments that do not have <strong>id="coloree"</strong>.',
      '<strong>div:not(:first-child)</strong> selects every <tag>div</tag> that is not a first child.',
      '<strong>:not(.big, .medium)</strong> sélectionne tous éléments that do not have <strong>class="big"</strong> or <strong>class="medium"</strong>.'
    ],
    boardMarkup: `
    <assiette id="coloree">
      <pomme class="small" />
    </assiette>
    <assiette>
      <pomme />
    </assiette>
    <pomme />
    <assiette>
      <orange class="small" />
    </assiette>
    <cornichon class="small" />
    `
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all éléments that have a specific attribute",
    doThis : "Select the items for someone",
    selector : "[for]",
    syntax: "[attribute]",
    help : 'Attributes appear inside the opening tag of an element, like this: <tag>span attribute="value"</tag>. An attribute does not always have a value, it can be blank!',
    examples : [
      '<strong>a[href]</strong> sélectionne tous <tag>a</tag> éléments that have a <strong>href="anything"</strong> attribute.',
      '<strong>[type]</strong> sélectionne tous éléments that have a <strong>type="anything"</strong>. attribute'
    ],
    boardMarkup:`
    <bento><pomme class="small"/></bento>
    <pomme for="Ethan"/>
    <assiette for="Alice"><cornichon/></assiette>
    <bento for="Clara"><orange/></bento>
    <cornichon/>`
  },
  {
    selectorName: "Attribute Selector",
    helpTitle: "Select all éléments that have a specific attribute",
    doThis : "Select the assiettes for someone",
    selector : "assiette[for]",
    syntax: "A[attribute]",
    help : "Combine the attribute selector with another selector (like the tag name selector) by adding it to the end.",
    examples : [
      '<strong>[value]</strong> sélectionne tous éléments that have a <strong>value="anything"</strong> attribute.',
      '<strong>a[href]</strong> sélectionne tous <tag>a</tag> éléments that have a <strong>href="anything"</strong> attribute.',
      '<strong>input[disabled]</strong> sélectionne tous <tag>input</tag> éléments with the <strong>disabled</strong> attribute'
    ],
    boardMarkup:`
    <assiette for="Sarah"><cornichon/></assiette>
    <assiette for="Luke"><pomme/></assiette>
    <assiette/>
    <bento for="Steve"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Value Selector",
    helpTitle: "Select all éléments that have a specific attribute value",
    doThis : "Select Vitaly's meal",
    selector : "[for=Vitaly]",
    syntax: '[attribute="value"]',
    help : "Attribute selectors are case sensitive, each character must match exactly.",
    examples : [
      '<strong>input[type="checkbox"]</strong> sélectionne tous checkbox input éléments.'
    ],
    boardMarkup:`
    <pomme for="Alexei" />
    <bento for="Albina"><pomme /></bento>
    <bento for="Vitaly"><orange/></bento>
    <cornichon/>
    `
  },
  {
    selectorName: "Attribute Starts With Selector",
    helpTitle: "Select all éléments with an attribute value that starts with specific characters",
    doThis : "Select the items for names that start with 'Sa'",
    selector : '[for^="Sa"]',
    syntax: '[attribute^="value"]',
    // help : "You can use quotes around the value in the selector, or not&mdash;it's optional!",
    examples : [
      '<strong>.toy[category^="Swim"]</strong> selects éléments with class <strong>toy</strong> and either <strong>category="Swimwear"</strong> or <strong>category="Swimming"</strong>.'
    ],
    boardMarkup: `
    <assiette for="Sam"><cornichon/></assiette>
    <bento for="Sarah"><pomme class="small"/></bento>
    <bento for="Mary"><orange/></bento>
    `
  },
  {
    selectorName: "Attribute Ends With Selector",
    helpTitle: "Select all éléments with an attribute value that ends with specific characters",
    doThis : "Select the items for names that end with 'ato'",
    selector : '[for$="ato"]',
    syntax: '[attribute$="value"]',
    help : '',
    examples : [
      '<strong>img[src$=".jpg"]</strong> sélectionne tous images display a <strong>.jpg</strong> image.',
    ],
    boardMarkup:`
    <pomme class="small"/>
    <bento for="Hayato"><cornichon/></bento>
    <pomme for="Ryota"></pomme>
    <assiette for="Minato"><orange/></assiette>
    <cornichon class="small"/>
    `
  },
  {
    selectorName: "Attribute Wildcard Selector",
    helpTitle: "Select all éléments with an attribute value that contains specific characters anywhere",
    syntax: '[attribute*="value"]',
    doThis : "Select the meals for names that contain 'obb'",
    selector : '[for*="obb"]',
    help : 'A useful selector if you can identify a common pattern in things like <strong>class</strong>, <strong>href</strong> or <strong>src</strong> attributes.',
    examples : [
      '<strong>img[src*="/thumbnails/"]</strong> sélectionne tous image éléments that show images from the "thumbnails" folder.',
      '<strong>[class*="heading"]</strong> sélectionne tous éléments with "heading" in their class, like <strong>class="main-heading"</strong> and <strong>class="sub-heading"</strong>'
    ],
    boardMarkup:`
    <bento for="Robbie"><pomme /></bento>
    <bento for="Timmy"><cornichon /></bento>
    <bento for="Bobby"><orange /></bento>
    `
  }
];
