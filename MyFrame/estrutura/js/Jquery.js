/*!
 * Biblioteca JavaScript jQuery v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation e outros colaboradores
 * Lançado sob a licença MIT
 * https://jquery.org/license
 *
 * Data: 2023-05-11T18:29Z
 */
(função(global, fábrica) {

	"use estrito";

	if ( tipo de módulo === "objeto" && tipo de módulo.exports === "objeto" ) {

		// Para ambientes CommonJS e do tipo CommonJS, onde uma `janela` adequada
		// está presente, execute a fábrica e obtenha jQuery.
		// Para ambientes que não possuem `window` com `document`
		// (como Node.js), exponha uma fábrica como module.exports.
		// Isso acentua a necessidade da criação de uma `janela` real.
		// por exemplo var jQuery = require("jquery")(window);
		// Veja ticket trac-14549 para mais informações.
		module.exports = global.document ?
			fábrica (global, verdadeiro):
			function( w ) {
				if (!w.documento) {
					throw new Error("jQuery requer uma janela com um documento");
				}
				retornar fábrica( w );
			};
	} outro {
		fábrica (global);
	}

// Passe isso se a janela ainda não estiver definida
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// lança exceções quando código não estrito (por exemplo, ASP.NET 4.5) acessa o modo estrito
// argumentos.callee.caller (trac-13335). Mas a partir do jQuery 3.0 (2016), o modo estrito deve ser comum
// o suficiente para que todas essas tentativas sejam protegidas em um bloco try.
"use estrito";

var arr = [];

var getProto = Object.getPrototypeOf;

var fatia = arr.fatia;

var flat = arr.flat ? function(matriz) {
	return arr.flat.call(array);
} : função( matriz ) {
	return arr.concat.apply([], array);
};


var push = arr.push;

var indexOf = arr.indexOf;

var classe2tipo = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var suporte = {};

var isFunction = function isFunction( obj ) {

		// Suporte: Chrome <=57, Firefox <=52
		// Em alguns navegadores, typeof retorna "função" para elementos HTML <object>
		// (ou seja, `typeof document.createElement( "object" ) === "function"`).
		// Não queremos classificar *qualquer* nó DOM como uma função.
		// Suporte: QtWeb <=3.8.5, WebKit <=534.34, ferramenta wkhtmltopdf <=0.12.5
		// Além disso, para WebKit antigo, typeof retorna "função" para coleções HTML
		// (por exemplo, `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "função" && typeof obj.nodeType !== "número" &&
			typeof obj.item !== "função";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var documento = janela.documento;



	var preservadoScriptAttributes = {
		tipo: verdadeiro,
		src: verdadeiro,
		nonce: verdadeiro,
		noModule: true
	};

	função DOMEval( código, nó, doc ) {
		documento = documento || documento;

		var i, val,
			script = doc.createElement( "script" );

		script.text = código;
		if (nó) {
			for (i em preserveScriptAttributes) {

				// Suporte: Firefox 64+, Edge 18+
				// Alguns navegadores não suportam a propriedade "nonce" em scripts.
				// Por outro lado, apenas usar `getAttribute` não é suficiente, pois
				// o atributo `nonce` é redefinido para uma string vazia sempre que
				// torna-se conectado ao contexto de navegação.
				// Veja https://github.com/whatwg/html/issues/2369
				// Consulte https://html.spec.whatwg.org/#nonce-attributes
				// A verificação `node.getAttribute` foi adicionada para fins de
				// `jQuery.globalEval` para que possa falsificar um nó não contendo
				// por meio de um objeto.
				val = nó[i] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Suporte: Android <=2.3 apenas (regExp funcional)
	return typeof obj === "objeto" || typeof obj === "função" ?
		class2type[ toString.call( obj ) ] || "objeto":
		tipo de obj;
}
/* Símbolo global */
// Definir esse global em .eslintrc.json criaria o perigo de usar o global
// desprotegido em outro lugar, parece mais seguro definir global apenas para este módulo



var versão = "3.7.0",

	rhtmlSufixo = /HTML$/i,

	// Definir uma cópia local do jQuery
	jQuery = function(seletor, contexto) {

		// O objeto jQuery é na verdade apenas o construtor init 'aprimorado'
		// Precisa de init se o jQuery for chamado (apenas permite que o erro seja lançado se não for incluído)
		return new jQuery.fn.init( seletor, contexto );
	};

jQuery.fn = jQuery.prototype = {

	// A versão atual do jQuery sendo usada
	jquery: versão,

	construtor: jQuery,

	// O comprimento padrão de um objeto jQuery é 0
	comprimento: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Obtém o N-ésimo elemento no conjunto de elementos correspondentes OU
	// Obtém todo o elemento correspondente definido como um array limpo
	obter: function( num ) {

		// Retorna todos os elementos em um array limpo
		if ( num == null ) {
			return slice.call( this );
		}

		// Retorna apenas um elemento do conjunto
		retorna num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Pega um array de elementos e coloca na pilha
	// (retornando o novo conjunto de elementos correspondentes)
	pushStack: function(elems) {

		// Construir um novo conjunto de elementos correspondentes jQuery
		var ret = jQuery.merge( this.constructor(), elems );

		// Adiciona o objeto antigo na pilha (como referência)
		ret.prevObject = this;

		// Retorna o conjunto de elementos recém-formado
		retorno ret;
	},

	// Executa um retorno de chamada para cada elemento no conjunto correspondente.
	cada: função( retorno de chamada ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call(elem, i, elem);
		} ) );
	},

	fatia: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	primeiro: function() {
		return this.eq( 0 );
	},

	último: function() {
		return this.eq( -1 );
	},

	função par() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retorno ( i + 1 ) % 2;
		} ) );
	},

	Função estranha() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			retornar i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	fim: função() {
		return this.prevObject || this.construtor();
	},

	// Apenas para uso interno.
	// Comporta-se como um método de Array, não como um método jQuery.
	empurre empurre,
	sort: arr.sort,
	emenda: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var opções, nome, origem, cópia, copyIsArray, clone,
		alvo = argumentos[ 0 ] || {},
		eu = 1,
		comprimento = argumentos.comprimento,
		profundo = falso;

	// Lida com uma situação de cópia profunda
	if (tipo de alvo === "booleano" ) {
		profundo = alvo;

		// Ignora o booleano e o alvo
		alvo = argumentos[i] || {};
		i++;
	}

	// Trata caso quando o alvo é uma string ou algo assim (possível em deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		destino = {};
	}

	// Estende o próprio jQuery se apenas um argumento for passado
	if ( i === comprimento ) {
		alvo = este;
		eu--;
	}

	for ( ; i < comprimento; i++ ) {

		// Só lida com valores não nulos/indefinidos
		if (( opções = argumentos[ i ] ) != nulo ) {

			// Estende o objeto base
			for (nome nas opções) {
				copiar = opções[nome];

				// Impede a poluição do Object.prototype
				// Prevenir loop sem fim
				if ( nome === "__proto__" || destino === copiar ) {
					continuar;
				}

				// Recurse se estivermos mesclando objetos simples ou arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					(copyIsArray = Array.isArray(cópia)))) {
					src = destino[nome];

					// Garanta o tipo adequado para o valor de origem
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if (!copyIsArray && !jQuery.isPlainObject(src)) {
						clone = {};
					} outro {
						clone = src;
					}
					copyIsArray = false;

					// Nunca mova objetos originais, clone-os
					target[ nome ] = jQuery.extend( deep, clone, copy );

				// Não traz valores indefinidos
				} else if (copiar!== indefinido) {
					alvo[nome] = copiar;
				}
			}
		}
	}

	// Retorna o objeto modificado
	destino de retorno;
};

jQuery.extend( {

	// Único para cada cópia do jQuery na página
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Supõe que o jQuery está pronto sem o módulo pronto
	isReady: verdadeiro,

	erro: function(mensagem) {
		lançar novo erro (msg);
	},

	noop: função() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detecta negativos óbvios
		// Use toString em vez de jQuery.type para capturar objetos de host
		if (!obj || toString.call(obj) !== "[objeto Objeto]" ) {
			retorna falso;
		}

		proto = getProto(obj);

		// Objetos sem protótipo (por exemplo, `Object.create( null )`) são simples
		if ( !proto ) {
			retornar verdadeiro;
		}

		// Objetos com protótipo são simples se forem construídos por uma função Object global
		Ctor = hasOwn.call( proto, "construtor" ) && proto.constructor;
		return typeof Ctor === "função" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var nome;

		for (nome em obj) {
			retorna falso;
		}
		retornar verdadeiro;
	},

	// Avalia um script em um contexto fornecido; cai de volta para o global
	// se não especificado.
	globalEval: function( código, opções, doc ) {
		DOMEval( código, { nonce: opções && opções.nonce }, doc );
	},

	cada: function( obj, callback ) {
		var comprimento, i = 0;

		if (isArrayLike(obj)) {
			comprimento = obj.comprimento;
			for ( ; i < comprimento; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					quebrar;
				}
			}
		} outro {
			for ( i em obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					quebrar;
				}
			}
		}

		retornar obj;
	},


	// Recupera o valor de texto de um array de nodos DOM
	texto: function(elem) {
		nó var,
			ret = "",
			eu = 0,
			nodeType = elem.nodeType;

		if (!nodeType) {

			// Se não houver nodeType, espera-se que seja um array
			while ((nó = elem[i++])) {

				// Não percorre nós de comentário
				ret += jQuery.text( nó );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			return elem.textContent;
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}

		// Não inclua comentários ou nós de instruções de processamento

		retorno ret;
	},

	// os resultados são apenas para uso interno
	makeArray: function( arr, resultados ) {
		var ret = resultados || [];

		if ( arr != nulo ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[arr]: arr
				);
			} outro {
				push.call( ret, arr );
			}
		}

		retorno ret;
	},

	inArray: function(elem, arr, i) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	isXMLDoc: function(elem) {
		var namespace = elem && elem.namespaceURI,
			docElem = elem && ( elem.ownerDocument || elem ).documentElement;

		// Assume HTML quando documentElement ainda não existe, como dentro
		// fragmentos de documento.
		return !rhtmlSuffix.test( namespace || docElem && docElem.nodeName || "HTML" );
	},

	// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
	// push.apply(_, arraylike) lança no antigo WebKit
	mesclar: função (primeiro, segundo) {
		var len = +segundo.comprimento,
			j = 0,
			i = primeiro.comprimento;

		for ( ; j < len; j++ ) {
			primeiro[i++] = segundo[j];
		}

		primeiro.comprimento = i;

		retorne primeiro;
	},

	grep: function(elems, callback, inverter) {
		var callbackInverse,
			partidas = [],
			eu = 0,
			comprimento = elementos.comprimento,
			callbackExpect = !invert;

		// Percorre o array, salvando apenas os itens
		// que passa a função do validador
		for ( ; i < comprimento; i++ ) {
			callbackInverse = !callback(elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matchs.push(elems[ i ] );
			}
		}

		partidas de retorno;
	},

	// arg é apenas para uso interno
	map: function(elems, callback, arg) {
		var comprimento, valor,
			eu = 0,
			ret = [];

		// Percorre o array, traduzindo cada um dos itens para seus novos valores
		if (isArrayLike(elems)) {
			comprimento = elems.comprimento;
			for ( ; i < comprimento; i++ ) {
				value = callback(elems[ i ], i, arg );

				if ( valor != nulo ) {
					ret.push( valor );
				}
			}

		// Percorre todas as chaves do objeto,
		} outro {
			for ( i em elementos ) {
				value = callback(elems[ i ], i, arg );

				if ( valor != nulo ) {
					ret.push( valor );
				}
			}
		}

		// Achata quaisquer arrays aninhados
		retornar plano( ret );
	},

	// Um ​​contador GUID global para objetos
	guia: 1,

	// jQuery.support não é usado no Core, mas outros projetos anexam seus
	// propriedades para ele, então ele precisa existir.
	suporte: suporte
} );

if (tipo de Símbolo === "função" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Preenche o mapa class2type
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, nome ) {
		class2type[ "[objeto " + nome + "]" ] = nome.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Suporte: somente iOS 8.2 real (não reproduzível no simulador)
	// verificação `in` usada para evitar erro JIT (gh-2145)
	// hasOwn não é usado aqui devido a falsos negativos
	// referente ao tamanho da lista de nós no IE
	var length = !!obj && "comprimento" in obj && obj.length,
		tipo = toType(obj);

	if ( isFunction( obj ) || isWindow( obj ) ) {
		retorna falso;
	}

	tipo de retorno === "array" || comprimento === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}


function nodeName(elem, name) {

	return elem.nodeName && elem.nodeName.toLowerCase() === nome.toLowerCase();

}
var pop = arr.pop;


var sort = arr.sort;


var emenda = arr. emenda;


var whitespace = "[\\x20\\t\\r\\n\\f]";


var rtrimCSS = new RegExp(
	"^" + espaço em branco + "+|((?:^|[^\\\\])(?:\\\\.)*)" + espaço em branco + "+$",
	"g"
);




// Nota: um elemento não contém a si mesmo
jQuery.contains = function( a, b ) {
	var bup = b && b.parentNode;

	retornar um === bup || !!( bup && bup.nodeType === 1 && (

		// Suporte: IE 9 - 11+
		// IE não tem `contém` em SVG.
		a.contém ?
			a.contém( bup ):
			a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
	) );
};




// Serialização de string/identificador CSS
// https://drafts.csswg.org/cssom/#common-serializing-idioms
var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;

function fcssescape( ch, asCodePoint ) {
	if (asCodePoint) {

		// U+0000 NULL torna-se U+FFFD SUBSTITUIÇÃO CARACTER
		if ( ch === "\0" ) {
			retornar "\uFFFD";
		}

		// Caracteres de controle e (dependendo da posição) números são escapados como pontos de código
		return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
	}

	// Outros caracteres ASCII potencialmente especiais recebem escape de barra invertida
	return "\\" + ch;
}

jQuery.escapeSelector = function(sel) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};




var preferidoDoc = documento,
	pushNative = push;

( função() {

var eu,
	Expr,
	contexto mais externo,
	sortInput,
	temDuplicado,
	push = pushNative,

	// vars de documento local
	documento,
	documentElement,
	documentIsHTML,
	rbuggyQSA,
	partidas,

	// Dados específicos da instância
	expando = jQuery.expandindo,
	dirruns = 0,
	feito = 0,
	classeCache = criarCache(),
	tokenCache = criarCache(),
	compiladorCache = criarCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		se (a === b) {
			hasDuplicate = verdadeiro;
		}
		retornar 0;
	},

	booleans = "marcado|selecionado|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|" +
		"loop|múltiplo|aberto|readonly|required|scoped",

	// Expressões regulares

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identificador = "(?:\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Seletores de atributos: https://www.w3.org/TR/selectors/#attribute-selectors
	atributos = "\\[" + espaço em branco + "*(" + identificador + ")(?:" + espaço em branco +

		// Operador (captura 2)
		"*([*^$|!~]?=)" + espaço em branco +

		// "Os valores dos atributos devem ser identificadores CSS [captura 5] ou strings [captura 3 ou captura 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"] )*)\"|(" + identificador + "))|)" +
		espaço em branco + "*\\]",

	pseudos = ":(" + identificador + ")(?:\\((" +

		// Para reduzir o número de seletores que precisam ser tokenizados no preFilter, prefira argumentos:
		// 1. citado (captura 3; captura 4 ou captura 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*) \"|" +

		// 2. simples (captura 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + atributos + ")*)|" +

		// 3. qualquer outra coisa (captura 2)
		".*" +
		")\\)|)",

	// Espaço em branco à esquerda e à direita sem escape, capturando alguns caracteres sem espaço em branco que precedem o último
	rwhitespace = new RegExp(whitespace + "+", "g" ),

	rcomma = new RegExp( "^" + espaço em branco + "*," + espaço em branco + "*" ),
	rleadingCombinator = new RegExp( "^" + espaço em branco + "*([>+~]|" + espaço em branco + ")" +
		espaço em branco + "*" ),
	rdescend = new RegExp(espaço em branco + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identificador + "$" ),

	matchExpr = {
		ID: novo RegExp( "^#(" + identificador + ")" ),
		CLASSE: new RegExp( "^\\.(" + identificador + ")" ),
		TAG: novo RegExp( "^(" + identificador + "|[*])" ),
		ATTR: novo RegExp( "^" + atributos ),
		PSEUDO: novo RegExp( "^" + pseudos ),
		FILHO: novo RegExp(
			"^:(somente|primeiro|último|enésimo|enésimo-último)-(filho|do-tipo)(?:\\(" +
				espaço em branco + "*(par|ímpar|(([+-]|)(\\d*)n|)" + espaço em branco + "*(?:([+-]|)" +
				espaço em branco + "*(\\d+)|))" + espaço em branco + "*\\)|)", "i" ),
		bool: new RegExp( "^(?:" + booleanos + ")$", "i" ),

		// Para uso em bibliotecas implementando .is()
		// Usamos isso para correspondência de PDV em `select`
		needContext: new RegExp( "^" + espaço em branco +
			"*[>+~]|:(par|ímpar|eq|gt|lt|nth|primeiro|último)(?:\\(" + espaço em branco +
			"*((?:-\\d)?\\d*)" + espaço em branco + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	cabeçalho = /^h\d$/i,

	// Seletores de ID ou TAG ou CLASS facilmente analisáveis/recuperáveis
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapa
	// https://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + espaço em branco +
		"?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		if ( não Hex ) {

			// Retira o prefixo da barra invertida de uma sequência de escape não hexadecimal
			return nonHex;
		}

		// Substitui uma sequência de escape hexadecimal pelo ponto de código Unicode codificado
		// Suporte: IE <=11+
		// Para valores fora do Basic Multilingual Plane (BMP), construa manualmente um
		// par substituto
		retornar alto < 0 ?
			String.fromCharCode(alto + 0x10000):
			String.fromCharCode( alto >> 10 | 0xD800, alto & 0x3FF | 0xDC00 );
	},

	// Usado para iframes; veja `setDocument`.
	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// A remoção do wrapper da função causa uma "Permissão negada"
	// erro no IE/Edge.
	descarregarHandler = function() {
		setDocumento();
	},

	inDisabledFieldset = addCombinator(
		function(elem){
			return elem.disabled === true && nodeName( elem, "fieldset" );
		},
		{ dir: "parentNode", próximo: "legenda" }
	);

// Suporte: IE <=9 apenas
// Acessando document.activeElement pode lançar inesperadamente
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	tentar {
		return document.activeElement;
	} pegar (err) { }
}

// Otimize para push.apply( _, NodeList )
tentar {
	push.apply(
		(arr = slice.call(preferredDoc.childNodes)),
		preferidoDoc.childNodes
	);

	// Suporte: Android <=4.0
	// Detecta push.apply com falha silenciosa
	// eslint-disable-next-line no-unused-expressions
	arr[preferredDoc.childNodes.length ].nodeType;
} pegar ( e ) {
	empurre = {
		aplicar: function(alvo, els) {
			pushNative.apply(alvo, slice.call(els));
		},
		chamada: function(alvo) {
			pushNative.apply(alvo, slice.call(argumentos, 1));
		}
	};
}

function find(seletor, contexto, resultados, semente) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = contexto && context.ownerDocument,

		// nodeType padrão é 9, já que o padrão do contexto é document
		nodeType = contexto ? context.nodeType : 9;

	resultados = resultados || [];

	// Retorno antecipado de chamadas com seletor ou contexto inválido
	if ( seletor de tipo !== "string" || !seletor ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		resultados de retorno;
	}

	// Tenta encontrar atalhos para operações (ao contrário de filtros) em documentos HTML
	if (!semente) {
		setDocumento(contexto);
		contexto = contexto || documento;

		if ( documentIsHTML ) {

			// Se o seletor for suficientemente simples, tente usar um método DOM "get*By*"
			// (exceto o contexto DocumentFragment, onde os métodos não existem)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// seletor de id
				if ((m = match[1])) {

					// Contexto do documento
					if ( tipo de nó === 9 ) {
						if ((elem = context.getElementById(m))) {

							// Suporte: somente IE 9
							// getElementById pode corresponder elementos por nome em vez de ID
							if (elem.id === m) {
								push.call( resultados, elem );
								resultados de retorno;
							}
						} outro {
							resultados de retorno;
						}

					// Contexto do elemento
					} outro {

						// Suporte: somente IE 9
						// getElementById pode corresponder elementos por nome em vez de ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							find.contains( contexto, elemento ) &&
							elem.id === m ) {

							push.call( resultados, elem );
							resultados de retorno;
						}
					}

				// Seletor de tipo
				} else if (combinar[ 2 ] ) {
					push.apply(resultados, context.getElementsByTagName(seletor));
					resultados de retorno;

				// seletor de classe
				} else if ( ( m = match[ 3 ] ) && context.getElementsByClassName ) {
					push.apply( resultados, context.getElementsByClassName( m ) );
					resultados de retorno;
				}
			}

			// Tira proveito de querySelectorAll
			if (!nonnativeSelectorCache[ seletor + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( seletor ) ) ) {

				novoSeletor = seletor;
				novoContexto = contexto;

				// qSA considera elementos fora de uma raiz de escopo ao avaliar filho ou
				// combinadores descendentes, o que não é o que queremos.
				// Nesses casos, contornamos o comportamento prefixando cada seletor no
				// lista com um seletor de ID referenciando o contexto do escopo.
				// A técnica também deve ser usada quando um combinador principal é usado
				// como tais seletores não são reconhecidos por querySelectorAll.
				// Obrigado a Andrew Dupont por esta técnica.
				if ( tipo de nó === 1 &&
					( rdescend.test( seletor ) || rleadingCombinator.test( seletor ) ) ) {

					// Expandir contexto para seletores irmãos
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						contexto;

					// Podemos usar :scope ao invés do ID hack se o navegador
					// suporta & se não estivermos mudando o contexto.
					// Suporte: IE 11+, Edge 17 - 18+
					// IE/Edge às vezes lança um erro "Permissão negada" quando
					// comparação estrita de dois documentos; comparações rasas funcionam.
					// eslint-disable-next-line eqeqeq
					if ( newContext != contexto || !support.scope ) {

						// Captura o ID de contexto, definindo-o primeiro se necessário
						if ((nid = context.getAttribute("id"))) {
							nid = jQuery.escapeSelector(nid);
						} outro {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefixa cada seletor na lista
					grupos = tokenize(seletor);
					i = grupos.comprimento;
					enquanto eu-- ) {
						grupos[ i ] = ( nid ? "#" + nid: ":scope" ) + " " +
							toSelector(grupos[i]);
					}
					newSelector = groups.join( "," );
				}

				tentar {
					push.apply(resultados,
						newContext.querySelectorAll( newSelector )
					);
					resultados de retorno;
				} catch (qsaError) {
					nonnativeSelectorCache(seletor, true );
				} finalmente {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// Todos os outros
	return select( selector.replace( rtrimCSS, "$1" ), contexto, resultados, semente );
}

/**
 * Crie caches de valor-chave de tamanho limitado
 * @returns {function(string, object)} Retorna os dados do objeto após armazená-lo em si mesmo com
 * nome da propriedade a string (com sufixo de espaço) e (se o cache for maior que Expr.cacheLength)
 * excluindo a entrada mais antiga
 */
função criarCache() {
	var chaves = [];

	função cache(chave, valor) {

		// Use (tecla + " ") para evitar colisão com as propriedades do protótipo nativo
		// (consulte https://github.com/jquery/sizzle/issues/157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Apenas mantém as entradas mais recentes
			excluir cache[ keys.shift() ];
		}
		return (cache[chave + ""] = valor);
	}
	cache de retorno;
}

/**
 * Marque uma função para uso especial pelo módulo seletor jQuery
 * @param {Function} fn A função a ser marcada
 */
função marcaFunção( fn ) {
	fn[ expandido ] = verdadeiro;
	retornar fn;
}

/**
 * Teste de suporte usando um elemento
 * @param {Function} fn Passou o elemento criado e retorna um resultado booleano
 */
função assert( fn ) {
	var el = document.createElement( "fieldset" );

	tentar {
		retornar !!fn(el);
	} pegar ( e ) {
		retorna falso;
	} finalmente {

		// Remove de seu pai por padrão
		if (el.parentNode) {
			el.parentNode.removeChild( el );
		}

		// libera memoria no IE
		el = nulo;
	}
}

/**
 * Retorna uma função para usar em pseudos para tipos de entrada
 * @param {String} tipo
 */
function createInputPseudo( tipo ) {
	return função(elem){
		return nodeName( elem, "input" ) && elem.type === type;
	};
}

/**
 * Retorna uma função para usar em pseudos para botões
 * @param {String} tipo
 */
function createButtonPseudo( tipo ) {
	return função(elem){
		return ( nodeName(elem, "entrada") || nodeName(elem, "botão") ) &&
			elem.type === type;
	};
}

/**
 * Retorna uma função para usar em pseudos para :enabled/:disabled
 * @param {Boolean} desativado verdadeiro para :desativado; falso para: ativado
 */
function createDisabledPseudo(desativado) {

	// Conhecido :disabled falsos positivos: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return função(elem){

		// Somente certos elementos podem corresponder a :enabled ou :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "formulário" no elemento) {

			// Verifique se há deficiência herdada em elementos não desativados relevantes:
			// * elementos associados a formulários listados em um fieldset desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#category-listed
			// https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * elementos de opção em um optgroup desabilitado
			// https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// Todos esses elementos possuem uma propriedade "form".
			if ( elem.parentNode && elem.disabled === false ) {

				// Elementos de opção adiam para um optgroup pai, se presente
				if ( "rótulo" no elemento) {
					if ( "rótulo" em elem.parentNode ) {
						return elem.parentNode.disabled === desativado;
					} outro {
						return elem.disabled === desativado;
					}
				}

				// Suporte: IE 6 - 11+
				// Use a propriedade de atalho isDisabled para verificar os ancestrais do conjunto de campos desabilitados
				return elem.isDisabled === desativado ||

					// Onde não houver isDisabled, verifique manualmente
					elem.isDisabled !== !disabled &&
						inDisabledFieldset(elem) === desabilitado;
			}

			return elem.disabled === desativado;

		// Tente eliminar os elementos que não podem ser desabilitados antes de confiar na propriedade desabilitada.
		// Algumas vítimas são pegas em nossa rede (label, legend, menu, track), mas não deveria
		// mesmo existe neles, muito menos tem um valor booleano.
		} else if ( "rótulo" em elem ) {
			return elem.disabled === desativado;
		}

		// Os elementos restantes não são nem :enabled nem :disabled
		retorna falso;
	};
}

/**
 * Retorna uma função para usar em pseudos para posicionais
 * @param {Função} fn
 */
função criarPosicionalPseudo( fn ) {
	return markFunction( function( argumento ) {
		argumento = +argumento;
		return markFunction( function( seed, matchs ) {
			var j,
				matchIndexes = fn( [], seed.length, argumento ),
				i = matchIndexes.length;

			// Corresponde aos elementos encontrados nos índices especificados
			enquanto eu-- ) {
				if ( semente [ ( j = matchIndexes [ i ] ) ] ) {
					seed[j] = !(match[j] = seed[j]);
				}
			}
		} );
	} );
}

/**
 * Verifica a validade de um nó como um contexto de seletor jQuery
 * @param {Elemento|Objeto=} contexto
 * @returns {Element|Object|Boolean} O nó de entrada, se aceitável, caso contrário, um valor falso
 */
função testeContext( contexto ) {
	return context && typeof context.getElementsByTagName !== "indefinido" && context;
}

/**
 * Define as variáveis ​​relacionadas ao documento uma vez com base no documento atual
 * @param {Element|Object} [node] Um elemento ou objeto de documento a ser usado para definir o documento
 * @returns {Object} Retorna o documento atual
 */
function setDocument( node ) {
	var subJanela,
		doc = nó ? node.ownerDocument || nó : preferidoDoc;

	// Retorna antecipadamente se o documento for inválido ou já selecionado
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ( doc == documento || doc.nodeType !== 9 || !doc.documentElement ) {
		documento de devolução;
	}

	// Atualiza variáveis ​​globais
	documento = documento;
	documentElement = document.documentElement;
	documentIsHTML = !jQuery.isXMLDoc(documento);

	// Suporte: apenas iOS 7, IE 9 - 11+
	// Navegadores mais antigos não suportavam `correspondências` sem prefixo.
	partidas = documentElement.matches ||
		documentElement.webkitMatchesSelector ||
		documentElement.msMatchesSelector;

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// Acessar documentos iframe após o descarregamento gera erros de "permissão negada" (consulte trac-13936)
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if (preferidoDoc != documento &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Suporte: IE 9 - 11+, Edge 12 - 18+
		subWindow.addEventListener( "descarregar", descarregarHandler );
	}

	// Suporte: IE <10
	// Verifica se getElementById retorna elementos pelo nome
	// Os métodos getElementById quebrados não pegam nomes definidos programaticamente,
	// então use um teste getElementsByName indireto
	support.getById = assert( function( el ) {
		documentElement.appendChild( el ).id = jQuery.expando;
		return !document.getElementsByName ||
			!document.getElementsByName( jQuery.expando ).length;
	} );

	// Suporte: somente IE 9
	// Verifica se é possível fazer matchSelector
	// em um nó desconectado.
	support.disconnectedMatch = assert( function( el ) {
		return matchs.call( el, "*" );
	} );

	// Suporte: IE 9 - 11+, Edge 12 - 18+
	// IE/Edge não suporta a pseudoclasse :scope.
	support.scope = assert( function() {
		return document.querySelectorAll( ":scope" );
	} );

	// Suporte: apenas Chrome 105 - 111, Safari 15.4 - 16.3 apenas
	// Certifique-se de que o argumento `:has()` seja analisado impiedosamente.
	// Incluímos `*` no teste para detectar implementações com bugs que são
	// perdoando _seletivamente_ (especificamente quando a lista inclui pelo menos
	// um seletor válido).
	// Observe que tratamos a total falta de suporte para `:has()` como se fosse
	// suporte compatível com especificações, o que é bom porque o uso de `:has()` em tal
	// os ambientes falharão no caminho qSA e retornarão ao jQuery traversal
	// de qualquer forma.
	support.cssHas = assert( function() {
		tentar {
			document.querySelector( ":has(*,:jqfake)" );
			retorna falso;
		} pegar ( e ) {
			retornar verdadeiro;
		}
	} );

	// ID filtra e encontra
	if (suporte.getById) {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return função(elem){
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find.ID = function( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				var elem = context.getElementById( id );
				retornar elem? [ elem ] : [];
			}
		};
	} outro {
		Expr.filter.ID = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return função(elem){
				var node = typeof elem.getAttributeNode !== "indefinido" &&
					elem.getAttributeNode("id");
				nó de retorno && node.value === attrId;
			};
		};

		// Suporte: IE 6 - 7 apenas
		// getElementById não é confiável como um atalho de busca
		Expr.find.ID = function( id, contexto ) {
			if ( typeof context.getElementById !== "indefinido" && documentIsHTML ) {
				nó var, i, elems,
					elem = context.getElementById(id);

				if (elem) {

					// Verifica o atributo id
					node = elem.getAttributeNode("id");
					if (node ​​&& node.value === id) {
						retornar [elem];
					}

					// Recorre a getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ((elem = elems[i++])) {
						node = elem.getAttributeNode("id");
						if (node ​​&& node.value === id) {
							retornar [elem];
						}
					}
				}

				retornar [];
			}
		};
	}

	// Marcação
	Expr.find.TAG = função( tag, contexto) {
		if ( typeof context.getElementsByTagName !== "indefinido" ) {
			return context.getElementsByTagName( tag );

		// nós DocumentFragment não possuem gEBTN
		} outro {
			return context.querySelectorAll( tag );
		}
	};

	// Aula
	Expr.find.CLASS = function( className, context ) {
		if ( typeof context.getElementsByClassName !== "indefinido" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	-------------------------------------------------- -------------------- */

	// Suporte a QSA e matchSelector

	rbuggyQSA = [];

	// Construir regex QSA
	// Estratégia Regex adotada por Diego Perini
	assert(função(el){

		var entrada;

		documentElement.appendChild( el ).innerHTML =
			"<a id='" + expando + "' href='' disabled='disabled'></a>" +
			"<select id='" + expando + "-\r\\' disabled='disabled'>" +
			"<option selected=''></option></select>";

		// Suporte: iOS <=7 - 8 apenas
		// Atributos booleanos e "valor" não são tratados corretamente em alguns documentos XML
		if (!el.querySelectorAll( "[selecionado]" ).length) {
			rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
		}

		// Suporte: iOS <=7 - 8 apenas
		if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
			rbuggyQSA.push( "~=" );
		}

		// Suporte: apenas iOS 8
		// https://bugs.webkit.org/show_bug.cgi?id=136851
		// `selector#id sibling-combinator selector` na página falha
		if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
			rbuggyQSA.push( ".#.+[+~]" );
		}

		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documentos, esses seletores não funcionariam nativamente.
		// Isso provavelmente está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os através do jQuery traversal no jQuery 3.x.
		if ( !el.querySelectorAll( ":checked" ).length ) {
			rbuggyQSA.push( ":marcado" );
		}

		// Suporte: Aplicativos nativos do Windows 8
		// Os atributos type e name são restritos durante a atribuição .innerHTML
		input = document.createElement( "input" );
		input.setAttribute( "tipo", "oculto" );
		el.appendChild( entrada ).setAttribute( "nome", "D" );

		// Suporte: IE 9 - 11+
		// Seletor :disabled do IE não pega os filhos de fieldsets desabilitados
		// Suporte: Chrome <=105+, Firefox <=104+, Safari <=15.4+
		// Em alguns tipos de documentos, esses seletores não funcionariam nativamente.
		// Isso provavelmente está OK, mas para compatibilidade com versões anteriores, queremos manter
		// manipulando-os através do jQuery traversal no jQuery 3.x.
		documentElement.appendChild( el ).disabled = true;
		if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
			rbuggyQSA.push( ":ativado", ":desativado" );
		}

		// Suporte: IE 11+, Edge 15 - 18+
		// IE 11/Edge não encontra elementos em uma consulta `[name='']` em alguns casos.
		// Adicionando um atributo temporário ao documento antes que a seleção funcione
		// em torno do problema.
		// Curiosamente, IE 10 e anteriores não parecem ter o problema.
		input = document.createElement( "input" );
		input.setAttribute( "nome", "" );
		el.appendChild( entrada );
		if (!el.querySelectorAll( "[nome='']" ).length) {
			rbuggyQSA.push( "\\[" + espaço em branco + "*nome" + espaço em branco + "*=" +
				espaço em branco + "*(?:''|\"\")" );
		}
	} );

	if (!support.cssHas) {

		// Suporte: Chrome 105 - 110+, Safari 15.4 - 16.3+
		// Nosso mecanismo regular `try-catch` falha ao detectar arquivos não suportados nativamente
		// pseudo-classes dentro de `:has()` (como `:has(:contains("Foo"))`)
		// em navegadores que analisam o argumento `:has()` como uma lista de seletores indulgente.
		// https://drafts.csswg.org/selectors/#relational agora requer o argumento
		// para ser analisado impiedosamente, mas os navegadores ainda não foram totalmente ajustados.
		rbuggyQSA.push( ":tem" );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );

	/* Ordenação
	-------------------------------------------------- -------------------- */

	// Ordenação do documento
	sortOrder = function( a, b ) {

		// Flag para remoção duplicada
		se (a === b) {
			hasDuplicate = verdadeiro;
			retornar 0;
		}

		// Classifica na existência do método se apenas uma entrada tiver compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		se ( comparar ) {
			retornar comparar;
		}

		// Calcula a posição se ambas as entradas pertencerem ao mesmo documento
		// Suporte: IE 11+, Edge 17 - 18+
		// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
		// dois documentos; comparações rasas funcionam.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Caso contrário, sabemos que eles estão desconectados
			1;

		// nós desconectados
		if ( comparar & 1 ||
			(!support.sortDetached && b.compareDocumentPosition(a) === compare)) {

			// Escolha o primeiro elemento relacionado ao nosso documento preferido
			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			if ( um === documento || a.ownerDocument == preferidoDoc &&
				find.contains(preferredDoc, a)) {
				retornar -1;
			}

			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			if ( b === documento || b.ownerDocument == preferidoDoc &&
				find.contains(preferredDoc, b)) {
				retornar 1;
			}

			// Mantém a ordem original
			return sortInput ?
				( indexOf.call( sortInput, a ) - indexOf.call( sortInput, b ) ) :
				0;
		}

		retornar comparar & 4 ? -1:1;
	};

	documento de devolução;
}

find.matches = function( expr, elements ) {
	return find(expr, null, null, elementos);
};

find.matchesSelector = function( elem, expr ) {
	setDocument(elem);

	if (documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyQSA || !rbuggyQSA.test( expr ) ) ) {

		tentar {
			var ret = matchs.call( elem, expr );

			// MatchSelector do IE 9 retorna falso em nós desconectados
			if ( ret || support.disconnectedMatch ||

					// Da mesma forma, nós desconectados estão em um documento
					// fragmento no IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				retorno ret;
			}
		} pegar ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return find(expr, document, null, [elem]).length > 0;
};

find.contains = function( contexto, elemento ) {

	// Definir vars de documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ((contexto.proprietárioDocumento || contexto) != documento) {
		setDocumento(contexto);
	}
	return jQuery.contains( contexto, elem );
};


find.attr = function(elem, name) {

	// Definir vars de documento se necessário
	// Suporte: IE 11+, Edge 17 - 18+
	// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
	// dois documentos; comparações rasas funcionam.
	// eslint-disable-next-line eqeqeq
	if ((elem.ownerDocument || elem) != documento) {
		setDocument(elem);
	}

	var fn = Expr.attrHandle[ nome.toLowerCase() ],

		// Não se deixe enganar pelas propriedades de Object.prototype (consulte trac-13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn(elem, nome, !documentIsHTML):
			indefinido;

	if ( val !== indefinido ) {
		valor de retorno;
	}

	return elem.getAttribute( nome );
};

find.error = function( msg ) {
	throw new Error( "Erro de sintaxe, expressão não reconhecida: " + msg );
};

/**
 * Classificação de documentos e remoção de duplicatas
 * Resultados @param {ArrayLike}
 */
jQuery.uniqueSort = function(resultados) {
	var elem,
		duplicatas = [],
		j = 0,
		i = 0;

	// A menos que *sabemos* que podemos detectar duplicatas, assuma sua presença
	//
	// Suporte: Android <=4.0+
	// O teste para detecção de duplicatas é imprevisível, portanto, assuma que não podemos
	// depende da detecção de duplicatas em todos os navegadores sem classificação estável.
	hasDuplicate = !support.sortStable;
	sortInput = !support.sortStable && slice.call( resultados, 0 );
	sort.call( resultados, sortOrder );

	if (temDuplicado) {
		while ((elem = resultados[i++])){
			if (elem === resultados[ i ] ) {
				j = duplicados.push( i );
			}
		}
		while ( j-- ) {
			splice.call(resultados, duplicados[ j ], 1 );
		}
	}

	// Limpa a entrada após a classificação para liberar os objetos
	// Veja https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	resultados de retorno;
};

jQuery.fn.uniqueSort = function() {
	return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
};

Expr = jQuery.expr = {

	// Pode ser ajustado pelo usuário
	cacheComprimento: 50,

	createPseudo: markFunction,

	correspondência: matchExpr,

	atrHandle: {},

	encontrar: {},

	relativo: {
		">": { dir: "parentNode", primeiro: verdadeiro },
		" ": { dir: "parentNode" },
		"+": { dir: "irmão anterior", primeiro: verdadeiro },
		"~": { dir: "irmão anterior" }
	},

	préFiltro: {
		ATTR: function( corresponder ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move o valor dado para corresponder[3] entre aspas ou sem aspas
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] || match[ 5 ] || "" )
				.replace( runescape, funescape );

			if (combinar[2] === "~=") {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		FILHO: function( corresponder ) {

			/* correspondências de matchExpr["CHILD"]
				1 tipo (somente|nth|...)
				2 o quê (filho | do tipo)
				3 argumentos (par|ímpar|\d*|\d*n([+-]\d+)?|...)
				4 xn-componente do argumento xn+y ([+-]?\d*n|)
				5 sinal de xn-componente
				6 x de xn-componente
				7 sinal do componente y
				8 y do componente y
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requer argumento
				if (!match[ 3 ] ) {
					find.error(match[ 0 ] );
				}

				// Parâmetros numéricos x e y para Expr.filter.CHILD
				// lembre-se que false/true cast respectivamente para 0/1
				correspondência[ 4 ] = +( correspondência[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ):
					2 * ( corresponder[ 3 ] === "par" || corresponder[ 3 ] === "ímpar" )
				);
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

			// outros tipos proíbem argumentos
			} else if (combinar[ 3 ] ) {
				find.error(match[ 0 ] );
			}

			jogo de retorno;
		},

		PSEUDO: function( corresponder ) {
			excesso de var,
				sem aspas = !match[ 6 ] && match[ 2 ];

			if (matchExpr.CHILD.test(match[ 0 ] ) ) {
				retornar nulo;
			}

			// Aceita argumentos entre aspas como estão
			if (combinar[3]) {
				correspondência[ 2 ] = correspondência[ 4 ] || combinar[ 5 ] || "";

			// Retira caracteres em excesso de argumentos sem aspas
			} else if ( sem aspas && rpseudo.test( sem aspas ) &&

				// Obtém o excesso de tokenize (recursivamente)
				(excesso = tokenize(sem aspas, true)) &&

				// avança para o próximo parêntese de fechamento
				( excesso = sem aspas.indexOf( ")", sem aspas.comprimento - excesso ) - sem aspas.comprimento ) ) {

				// excesso é um índice negativo
				match[ 0 ] = match[ 0 ].slice( 0, excesso );
				match[ 2 ] = sem aspas.slice( 0, excesso );
			}

			// Retorna apenas as capturas necessárias para o pseudo método de filtro (tipo e argumento)
			return match.slice( 0, 3 );
		}
	},

	filtro: {

		TAG: function( nodeNameSelector ) {
			var ExpectNodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				função() {
					retornar verdadeiro;
				} :
				function(elem){
					return nodeName(elem, esperadoNodeNome);
				};
		},

		CLASSE: function(className) {
			var padrão = classCache[ className + " " ];

			padrão de retorno ||
				( padrão = new RegExp( "(^|" + espaço em branco + ")" + className +
					"(" + espaço em branco + "|$)" ) ) &&
				classCache(className, function(elem) {
					return padrão.teste(
						typeof elem.className === "string" && elem.className ||
							typeof elem.getAttribute !== "indefinido" &&
								elem.getAttribute( "classe" ) ||
							""
					);
				} );
		},

		ATTR: function( nome, operador, cheque ) {
			return função(elem){
				var resultado = find.attr(elem, nome);

				if ( resultado == null ) {
					operador de retorno === "!=";
				}
				if (!operador) {
					retornar verdadeiro;
				}

				resultado += "";

				if ( operador === "=" ) {
					resultado de retorno === verificar;
				}
				if ( operador === "!=" ) {
					retorna o resultado !== verifica;
				}
				if (operador === "^=") {
					return check && result.indexOf( check ) === 0;
				}
				if ( operador === "*=" ) {
					return check && result.indexOf( check ) > -1;
				}
				if (operador === "$=") {
					return check && result.slice( -check.length ) === check;
				}
				if ( operador === "~=" ) {
					return( " " + resultado.replace( rwhitespace, " " ) + " " )
						.indexOf( verificar ) > -1;
				}
				if ( operador === "|=" ) {
					resultado de retorno === verificar || result.slice( 0, check.length + 1 ) === check + "-";
				}

				retorna falso;
			};
		},

		FILHO: função( tipo, o quê, _argumento, primeiro, último ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = o que === "do tipo";

			retornar primeiro === 1 && último === 0 ?

				// Atalho para :nth-*(n)
				function(elem){
					return !!elem.parentNode;
				} :

				function(elem, _context, xml) {
					var cache, outerCache, node, nodeIndex, start,
						dir = simples !== encaminhar ? "nextSibling" : "anteriorSibling",
						pai = elem.parentNode,
						nome = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diferença = falso;

					if (pai) {

						// :(first|last|only)-(child|of-type)
						if ( simples ) {
							enquanto (dir) {
								nó = elem;
								while ((nó = nó[dir])) {
									if (doTipo?
										nodeName( node, name ):
										node.nodeType === 1 ) {

										retorna falso;
									}
								}

								// Inverte a direção para :only-* (se ainda não o fizemos)
								start = dir = digite === "apenas" && !start && "nextSibling";
							}
							retornar verdadeiro;
						}

						início = [ encaminhar ? pai.primeirofilho : pai.últimofilho ];

						// não-xml :nth-child(...) armazena dados de cache no `pai`
						if ( encaminhar && usarCache ) {

							// Procura `elem` de um índice armazenado em cache anteriormente
							outerCache = pai[ expando ] || ( pai[ expando ] = {} );
							cache = outerCache[ tipo ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback para buscar `elem` desde o início
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// Quando encontrado, cache índices em `parent` e break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ tipo ] = [ dirruns, nodeIndex, diff ];
									quebrar;
								}
							}

						} outro {

							// Use o índice de elemento armazenado em cache anteriormente, se disponível
							if (useCache) {
								outerCache = elem[ expando ] || (elem[expansão] = {});
								cache = outerCache[ tipo ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// ou :nth-last-child(...) ou :nth(-last)?-of-type(...)
							if ( dif === false ) {

								// Use o mesmo loop acima para buscar `elem` desde o início
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ((doTipo?
										nodeName( node, name ):
										node.nodeType === 1 ) &&
										++diferente) {

										// Cache o índice de cada elemento encontrado
										if (useCache) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );
											outerCache[ tipo ] = [ dirruns, diff ];
										}

										if ( nó === elem ) {
											quebrar;
										}
									}
								}
							}
						}

						// Incorpore o deslocamento e, em seguida, verifique o tamanho do ciclo
						diff -= último;
						return diff === primeiro || (diff % primeiro === 0 && diff / first >= 0 );
					}
				};
		},

		PSEUDO: function( pseudo, argumento ) {

			// nomes de pseudoclasses não diferenciam maiúsculas de minúsculas
			// https://www.w3.org/TR/selectors/#pseudo-classes
			// Prioriza a diferenciação de maiúsculas e minúsculas no caso de pseudos personalizados serem adicionados com letras maiúsculas
			// Lembre-se que setFilters herda de pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					find.error( "pseudo não suportado: " + pseudo );

			// O usuário pode usar createPseudo para indicar que
			// argumentos são necessários para criar a função de filtro
			// assim como o jQuery faz
			if (fn[expansão]) {
				return fn(argumento);
			}

			// Mas mantém o suporte para assinaturas antigas
			if ( fn.comprimento > 1 ) {
				args = [ pseudo, pseudo, "", argumento ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( semente, correspondências ) {
						var idx,
							correspondido = fn(semente, argumento),
							i = matched.length;
						enquanto eu-- ) {
							idx = indexOf.call( seed, matched[ i ] );
							seed[idx] = !(matches[idx] = matched[i]);
						}
					} ):
					function(elem){
						return fn(elem, 0, args);
					};
			}

			retornar fn;
		}
	},

	pseudos: {

		// pseudos potencialmente complexos
		not: markFunction( function( selector ) {

			// Apara o seletor passado para compilar
			// para evitar o tratamento inicial e final
			// espaços como combinadores
			var entrada = [],
				resultados = [],
				matcher = compile( selector.replace( rtrimCSS, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						incomparável = matcher( seed, null, xml, [] ),
						i = semente.comprimento;

					// Corresponde a elementos não correspondidos por `matcher`
					enquanto eu-- ) {
						if ((elem = incomparável[ i ] ) ) {
							seed[ i ] = !( corresponde a [ i ] = elem );
						}
					}
				} ):
				function(elem, _context, xml) {
					entrada[ 0 ] = elemento;
					matcher(entrada, nulo, xml, resultados);

					// Não mantém o elemento
					// (consulte https://github.com/jquery/sizzle/issues/299)
					entrada[ 0 ] = nulo;
					return !resultados.pop();
				};
		} ),

		tem: markFunction( function( selector ) {
			return função(elem){
				return find( seletor, elemento ).length > 0;
			};
		} ),

		contém: markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return função(elem){
				return ( elem.textContent || jQuery.text( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Se um elemento é representado por um seletor :lang()
		// é baseado apenas no valor de linguagem do elemento
		// sendo igual ao identificador C,
		// ou começando com o identificador C imediatamente seguido por "-".
		// A correspondência de C com o valor de idioma do elemento é executada sem distinção entre maiúsculas e minúsculas.
		// O identificador C não precisa ser um nome de idioma válido."
		// https://www.w3.org/TR/selectors/#lang-pseudo
		lang: markFunction( function( lang ) {

			// valor lang deve ser um identificador válido
			if (!ridentifier.test( lang || "" ) ) {
				find.error( "idioma não suportado: " + idioma );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return função(elem){
				var elemLang;
				fazer {
					if ((elemLang = documentIsHTML?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				retorna falso;
			};
		} ),

		// Diversos
		alvo: function(elem) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		root: function(elem) {
			return elem === documentElement;
		},

		foco: function(elem) {
			return elemento === safeActiveElement() &&
				document.hasFocus() &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Propriedades booleanas
		habilitado: createDisabledPseudo( false ),
		desativado: createDisabledPseudo( true ),

		verificado: function(elem) {

			// Em CSS3, :checked deve retornar elementos marcados e selecionados
			// https://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			return ( nodeName( elem, "input" ) && !!elem.checked ) ||
				( nodeName( elem, "opção" ) && !!elem.selected );
		},

		selecionado: function(elem) {

			// Suporte: IE <=11+
			// Acessando a propriedade selectedIndex
			// força o navegador a tratar a opção padrão como
			// selecionado quando em um optgroup.
			if (elem.parentNode) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Conteúdo
		vazio: function(elem) {

			// https://www.w3.org/TR/selectors/#empty-pseudo
			// :empty é negado pelo elemento (1) ou nós de conteúdo (texto: 3; cdata: 4; entidade ref: 5),
			// mas não por outros (comentário: 8; instrução de processamento: 7; etc.)
			// nodeType < 6 funciona porque os atributos (2) não aparecem como filhos
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					retorna falso;
				}
			}
			retornar verdadeiro;
		},

		pai: function(elem) {
			return !Expr.pseudos.empty( elem );
		},

		// Tipos de elemento/entrada
		cabeçalho: function(elem) {
			return rheader.test( elem.nodeName );
		},

		entrada: function(elem) {
			return rinputs.test( elem.nodeName );
		},

		botão: function(elem) {
			return nodeName( elem, "input" ) && elem.type === "button" ||
				nodeName(elem, "botão");
		},

		texto: function(elem) {
			var atr;
			return nodeName( elem, "input" ) && elem.type === "text" &&

				// Suporte: IE <10 apenas
				// Novos valores de atributo HTML5 (por exemplo, "search") aparecem
				// com elem.type === "texto"
				( ( attr = elem.getAttribute( "tipo") ) == nulo ||
					attr.toLowerCase() === "texto" );
		},

		// Posição na coleção
		primeiro: createPositionalPseudo( function() {
			retornar [ 0 ];
		} ),

		último: createPositionalPseudo( function( _matchIndexes, length ) {
			retornar [comprimento - 1];
		} ),

		eq: createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argumento < 0 ? argumento + comprimento: argumento ];
		} ),

		mesmo: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		odd: createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < comprimento; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		lt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i;

			if (argumento < 0) {
				i = argumento + comprimento;
			} else if (argumento > comprimento) {
				i = comprimento;
			} outro {
				i = argumento;
			}

			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		gt: createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argumento < 0 ? argumento + comprimento: argumento;
			for ( ; ++i < comprimento; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos.nth = Expr.pseudos.eq;

// Adicionar pseudos de tipo de botão/entrada
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[i] = createInputPseudo(i);
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[i] = createButtonPseudo(i);
}

// API fácil para criar novos setFilters
função setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

function tokenize(seletor, parseOnly) {
	var correspondente, correspondência, tokens, tipo,
		soFar, grupos, preFilters,
		em cache = tokenCache[ seletor + " " ];

	if (em cache) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = seletor;
	grupos = [];
	preFilters = Expr.preFilter;

	enquanto ( até agora ) {

		// Vírgula e primeira execução
		if (!matched || (match = rcomma.exec( soFar ) ) ) {
			if (combinar) {

				// Não consuma vírgulas à direita como válidas
				soFar = soFar.slice( match[ 0 ].length ) || até aqui;
			}
			groups.push( (tokens = [] ) );
		}

		combinado = falso;

		// Combinadores
		if ((match = rleadingCombinator.exec(soFar))) {
			combinado = match.shift();
			tokens.push( {
				valor: combinado,

				// Lança os combinadores descendentes no espaço
				digite: match[ 0 ].replace( rtrimCSS, " " )
			} );
			soFar = soFar.slice(matched.length);
		}

		// Filtros
		for ( digite Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				(correspondência = preFiltros[tipo](correspondência)))) {
				combinado = match.shift();
				tokens.push( {
					valor: combinado,
					tipo: tipo,
					correspondências: correspondência
				} );
				soFar = soFar.slice(matched.length);
			}
		}

		if (!combinado) {
			quebrar;
		}
	}

	// Retorna o comprimento do excesso inválido
	// se estamos apenas analisando
	// Caso contrário, lança um erro ou retorna tokens
	if ( parseOnly ) {
		return soFar.length;
	}

	voltar tão longe?
		find.error(seletor):

		// Cache os tokens
		tokenCache( seletor, grupos ).slice( 0 );
}

function toSelector(tokens) {
	var i = 0,
		len = tokens.length,
		seletor = "";
	for ( ; i < len; i++ ) {
		seletor += tokens[i].valor;
	}
	seletor de retorno;
}

function addCombinator(correspondente, combinador, base) {
	var dir = combinator.dir,
		skip = combinador.next,
		tecla = pular || dir,
		checkNonElements = base && chave === "parentNode",
		feitoNome = feito++;

	return combinator.first ?

		// Verifica o elemento ancestral/precedente mais próximo
		function(elem, contexto, xml) {
			while ((elem = elem[dir])) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher(elem, context, xml);
				}
			}
			retorna falso;
		} :

		// Verifica todos os elementos ancestrais/precedentes
		function(elem, contexto, xml) {
			var oldCache, outerCache,
				newCache = [dirruns, doneName];

			// Não podemos definir dados arbitrários em nós XML, então eles não se beneficiam do cache do combinador
			if (xml) {
				while ((elem = elem[dir])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if (matcher(elem, context, xml)) {
							retornar verdadeiro;
						}
					}
				}
			} outro {
				while ((elem = elem[dir])) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[expansão] = {});

						if (skip && nodeName(elem, skip)) {
							elem = elem[ dir ] || elemento;
						} else if ((oldCache = outerCache[chave]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Atribuir a newCache para que os resultados se propaguem de volta aos elementos anteriores
							return (newCache[2] = oldCache[2]);
						} outro {

							// Reutiliza o newcache para que os resultados se propaguem de volta para os elementos anteriores
							outerCache[chave] = newCache;

							// Uma correspondência significa que terminamos; uma falha significa que temos que continuar verificando
							if ((newCache[2] = matcher(elem, contexto, xml))) {
								retornar verdadeiro;
							}
						}
					}
				}
			}
			retorna falso;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function(elem, contexto, xml) {
			var i = matchers.length;
			enquanto eu-- ) {
				if (!matchers[ i ](elem, context, xml) ) {
					retorna falso;
				}
			}
			retornar verdadeiro;
		} :
		correspondentes[ 0 ];
}

função multipleContexts(seletor, contextos, resultados) {
	var i = 0,
		len = contextos.comprimento;
	for ( ; i < len; i++ ) {
		find(seletor, contextos[ i ], resultados );
	}
	resultados de retorno;
}

função condensar(incomparável, mapa, filtro, contexto, xml) {
	var elem,
		novoNão correspondido = [],
		eu = 0,
		len = incomparável. comprimento,
		mapeado = mapa != nulo;

	for ( ; i < len; i++ ) {
		if ((elem = incomparável[ i ] ) ) {
			if (!filtro || filtro(elem, contexto, xml)) {
				newUnmatched.push(elem);
				if ( mapeado ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher(postFilter);
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem, matcherOut,
			préMapa = [],
			postMapa = [],
			preexistente = resultados.comprimento,

			// Obtém elementos iniciais da semente ou do contexto
			elems = semente ||
				multipleContexts( seletor || "*",
					context.nodeType ? [ contexto ] : contexto, [] ),

			// Pré-filtro para obter entrada correspondente, preservando um mapa para sincronização de resultados iniciais
			matcherIn = preFilter && ( seed || !seletor ) ?
				condense(elems, preMap, preFilter, context, xml):
				elementos;

		if (correspondente) {

			// Se tivermos um postFinder, ou seed filtrado, ou postFilter não seed
			// ou resultados preexistentes,
			matcherOut = postFinder || ( semente ? preFilter : preexistente || postFilter ) ?

				// ...processamento intermediário é necessário
				[] :

				// ... caso contrário, use os resultados diretamente
				resultados;

			// Encontrar correspondências primárias
			matcher(matcherIn, matcherOut, contexto, xml);
		} outro {
			matcherOut = matcherIn;
		}

		// Aplicar postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], contexto, xml);

			// Descombina os elementos com falha movendo-os de volta para matcherIn
			i = temp.comprimento;
			enquanto eu-- ) {
				if ((elem = temp[i])) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( semente ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Obtenha o matcherOut final condensando este intermediário em contextos postFinder
					temperatura = [];
					i = matcherOut.length;
					enquanto eu-- ) {
						if ((elem = matcherOut[i])) {

							// Restaura matcherIn já que elem ainda não é uma correspondência final
							temp.push( (matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move os elementos correspondentes da semente para os resultados para mantê-los sincronizados
				i = matcherOut.length;
				enquanto eu-- ) {
					if ((elem = matcherOut[i]) &&
						( temp = postFinder ? indexOf.call( seed, elem ): preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( resultados[ temp ] = elem );
					}
				}
			}

		// Adiciona elementos aos resultados, através do postFinder se definido
		} outro {
			matcherOut = condensar(
				matcherOut === resultados?
					matcherOut.splice( preexistente, matcherOut.length ):
					matcherOut
			);
			if ( postFinder ) {
				postFinder(nulo, resultados, matcherOut, xml);
			} outro {
				push.apply( resultados, matcherOut );
			}
		}
	} );
}

function matcherFromTokens(tokens) {
	var checkContext, correspondente, j,
		len = tokens.length,
		leaderRelative = Expr.relative[ tokens[ 0 ].type ],
		Relativo implícito = Relativo principal || Expr.relativa[ " " ],
		i = líderRelativo ? 1: 0,

		// O matcher fundamental garante que os elementos sejam acessíveis a partir do(s) contexto(s) de nível superior
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf.call(checkContext, elem) > -1;
		}, implicitRelative, true ),
		matchers = [ função(elem, contexto, xml) {

			// Suporte: IE 11+, Edge 17 - 18+
			// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
			// dois documentos; comparações rasas funcionam.
			// eslint-disable-next-line eqeqeq
			var ret = ( !leadingRelative && ( xml || contexto != outermostContext ) ) || (
				(checkContext = contexto).nodeType?
					matchContext(elem, contexto, xml):
					matchAnyContext(elem, context, xml));

			// Evite pendurar no elemento
			// (consulte https://github.com/jquery/sizzle/issues/299)
			checkContext = null;
			retorno ret;
		} ];

	for ( ; i < len; i++ ) {
		if ((matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} outro {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Retorna especial ao ver um matcher posicional
			if (correspondente[expansão]) {

				// Encontra o próximo operador relativo (se houver) para manipulação adequada
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						quebrar;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && paraSeletor(

						// Se o token anterior for um combinador descendente, insira um elemento qualquer implícito `*`
						tokens.slice( 0, i - 1 )
							.concat( { valor: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace(rtrimCSS, "$1" ),
					combinador,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice(j))),
					j < len && toSelector(tokens)
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

função matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, correspondente,
				número correspondente = 0,
				eu = "0",
				incomparável = semente && [],
				setMatched = [],
				contextBackup = contexto externo,

				// Devemos sempre ter elementos de origem ou contexto externo
				elems = semente || byElement && Expr.find.TAG( "*", mais externo ),

				// Use dirruns inteiros se este for o matcher mais externo
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if (mais externo) {

				// Suporte: IE 11+, Edge 17 - 18+
				// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
				// dois documentos; comparações rasas funcionam.
				// eslint-disable-next-line eqeqeq
				outermostContext = contexto == documento || contexto || mais externo;
			}

			// Adiciona elementos passando elementMatchers diretamente aos resultados
			// Suporte: iOS <=7 - 9 apenas
			// Tolera propriedades NodeList (IE: "comprimento"; Safari: <número>) correspondente
			// elementos por id. (ver trac-14142)
			for ( ; i !== len && ( elem = elems[ i ] ) != nulo; i++ ) {
				if (porElemento && elem) {
					j = 0;

					// Suporte: IE 11+, Edge 17 - 18+
					// Às vezes, o IE/Edge lança um erro de "Permissão negada" ao comparar estritamente
					// dois documentos; comparações rasas funcionam.
					// eslint-disable-next-line eqeqeq
					if ( !contexto && elem.ownerDocument != documento ) {
						setDocument(elem);
						xml = !documentIsHTML;
					}
					while ((matcher = elementMatchers[j++])){
						if (correspondente(elem, contexto || documento, xml)) {
							push.call( resultados, elem );
							quebrar;
						}
					}
					if (mais externo) {
						dirruns = dirrunsÚnico;
					}
				}

				// Rastrear elementos incomparáveis ​​para filtros definidos
				if (porSet) {

					// Eles terão passado por todos os matchers possíveis
					if ((elem = !matcher && elem)) {
						matchedCount--;
					}

					// Aumenta o array para cada elemento, combinado ou não
					if ( semente ) {
						unmatched.push(elem);
					}
				}
			}

			// `i` agora é a contagem de elementos visitados acima, e adicionando-a a `matchedCount`
			// torna o último não negativo.
			matchedCont += i;

			// Aplicar filtros de conjunto a elementos não correspondentes
			// NOTA: Isso pode ser ignorado se não houver elementos não correspondentes (ou seja, `matchedCount`
			// é igual a `i`), a menos que não tenhamos visitado _any_ elementos no loop acima porque temos
			// sem matchers de elemento e sem seed.
			// Incrementar uma string inicial "0" `i` permite que `i` permaneça uma string apenas naquele
			// caso, que resultará em um "00" `matchedCount` que difere de `i`, mas também é
			// numericamente zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ((matcher = setMatchers[j++])){
					matcher(incomparável, setMatched, contexto, xml);
				}

				if ( semente ) {

					// Reintegra correspondências de elemento para eliminar a necessidade de classificação
					if (contagem correspondente > 0) {
						enquanto eu-- ) {
							if ( !( incomparável[ i ] || setMatched[ i ] ) ) {
								setMatched[i] = pop.call(resultados);
							}
						}
					}

					// Descarta os valores de espaço reservado do índice para obter apenas correspondências reais
					setMatched = condense( setMatched );
				}

				// Adicionar correspondências aos resultados
				push.apply( resultados, setMatched );

				// Correspondências de conjunto sem sementes sucedendo várias correspondências bem-sucedidas estipulam classificação
				if ( mais externo && !seed && setMatched.length > 0 &&
					(matchedCount + setMatchers.length) > 1) {

					jQuery.uniqueSort( resultados );
				}
			}

			// Substitui a manipulação de globais por correspondências aninhadas
			if (mais externo) {
				dirruns = dirrunsÚnico;
				outermostContext = contextoBackup;
			}

			retorno incomparável;
		};

	retornar porSet ?
		markFunction(superMatcher):
		superMatcher;
}

function compile( selector, match /* Apenas para uso interno */ ) {
	var eu,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ seletor + " " ];

	if ( !em cache ) {

		// Gera uma função de funções recursivas que podem ser usadas para verificar cada elemento
		if (!match) {
			match = tokenize(seletor);
		}
		i = correspondência.comprimento;
		enquanto eu-- ) {
			cached = matcherFromTokens(match[ i ] );
			if (em cache[ expandido ] ) {
				setMatchers.push( em cache );
			} outro {
				elementMatchers.push( em cache );
			}
		}

		// Cache a função compilada
		cached = compiladorCache(seletor,
			matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Salvar seletor e tokenização
		cached.selector = seletor;
	}
	retornar em cache;
}

/**
 * Uma função de seleção de baixo nível que funciona com jQuery's compilado
 * funções do seletor
 * @param {String|Function} seletor Um seletor ou pré-compilado
 * função de seletor construída com compilação de seletor jQuery
 * @param {Elemento} contexto
 * @param {Array} [resultados]
 * @param {Array} [seed] Um conjunto de elementos para comparar
 */
function select(seletor, contexto, resultados, semente) {
	var i, tokens, token, type, find,
		compilado = seletor de tipo === "função" && seletor,
		match = !seed && tokenize( ( seletor = compilado.seletor || seletor ) );

	resultados = resultados || [];

	// Tenta minimizar as operações se houver apenas um seletor na lista e nenhuma semente
	// (este último nos garante o contexto)
	if ( match.length === 1 ) {

		// Reduz o contexto se o seletor composto principal for um ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			contexto = ( Expr.find.ID(
				token.matches[ 0 ].replace( runescape, funescape ),
				contexto
			) || [] )[0];
			if ( !contexto ) {
				resultados de retorno;

			// Correspondentes pré-compilados ainda verificarão a ancestralidade, então suba um nível
			} else if ( compilado ) {
				contexto = context.parentNode;
			}

			seletor = seletor.fatia(tokens.shift().valor.comprimento);
		}

		// Busca um conjunto de sementes para correspondência da direita para a esquerda
		i = matchExpr.needsContext.test(seletor)? 0 : tokens.comprimento;
		enquanto eu-- ) {
			ficha = fichas[i];

			// Aborta se atingirmos um combinador
			if ( Expr.relative[ ( type = token.type ) ] ) {
				quebrar;
			}
			if ((find = Expr.find[tipo])){

				// Pesquise, expandindo o contexto para os principais combinadores irmãos
				if ((semente = encontrar(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) &&
						testContext( context.parentNode ) || contexto
				) ) ) {

					// Se a semente estiver vazia ou nenhum token restar, podemos retornar antecipadamente
					tokens.splice( i, 1 );
					seletor = seed.length && toSelector( tokens );
					if (!seletor) {
						push.apply( resultados, semente );
						resultados de retorno;
					}

					quebrar;
				}
			}
		}
	}

	// Compila e executa uma função de filtragem se não for fornecida
	// Forneça `match` para evitar a reconstituição se modificarmos o seletor acima
	(compilado || compilar(seletor, corresponder))(
		semente,
		contexto,
		!documentIsHTML,
		resultados,
		!contexto || rsibling.test( selector ) && testContext( context.parentNode ) || contexto
	);
	resultados de retorno;
}

// Atribuições únicas

// Suporte: Android <=4.0 - 4.1+
// Estabilidade de classificação
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Inicializa contra o documento padrão
setDocumento();

// Suporte: Android <=4.0 - 4.1+
// Nós separados seguem confusamente *um ao outro*
support.sortDetached = assert( function( el ) {

	// Deve retornar 1, mas retorna 4 (seguindo)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

jQuery.find = localizar;

// Descontinuada
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.unique = jQuery.uniqueSort;

// Estes sempre foram privados, mas costumavam ser documentados
// como parte do Sizzle então vamos mantê-los na linha 3.x
// para fins de compatibilidade com versões anteriores.
localizar.compile = compilar;
localizar.selecionar = selecionar;
find.setDocument = setDocument;

find.escape = jQuery.escapeSelector;
localizar.getText = jQuery.text;
encontrar.isXML = jQuery.isXMLDoc;
encontrar.seletores = jQuery.expr;
encontrar.suporte = jQuery.suporte;
encontrar.uniqueSort = jQuery.uniqueSort;

	/* habilitar eslint */

} )();


var dir = function(elem, dir, até) {
	var correspondente = [],
		truncar = até !== indefinido;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if (elem.nodeType === 1) {
			if ( truncar && jQuery(elem).is(até)){
				quebrar;
			}
			matched.push(elem);
		}
	}
	retornar correspondido;
};


var irmãos = function( n, elem ) {
	var correspondido = [];

	for ( ; n; n = n.próximoIrmão ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	retornar correspondido;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([az][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>( ?:<\/\1>|)$/i );



// Implemente a funcionalidade idêntica para filtro e não
função winnow( elementos, qualificador, não ) {
	if ( isFunction( qualificador ) ) {
		return jQuery.grep(elementos, função(elem,i){
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Único elemento
	if (qualifier.nodeType) {
		return jQuery.grep(elementos, função(elem){
			return (elem === qualificador) !== não;
		} );
	}

	// Arraylike de elementos (jQuery, argumentos, Array)
	if ( qualificador typeof !== "string" ) {
		return jQuery.grep(elementos, função(elem){
			return ( indexOf.call( qualificador, elem ) > -1 ) !== não;
		} );
	}

	// Filtrado diretamente para seletores simples e complexos
	return jQuery.filter( qualificador, elementos, não );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	se não ) {
		expr = ":not(" + expr + ")";
	}

	if (elems.length === 1 && elem.nodeType === 1) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches(expr, jQuery.grep(elems, function(elem){
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	encontre: function(seletor) {
		var i, ret,
			len = this.length,
			auto = isso;

		if (tipo de seletor !== "string" ) {
			return this.pushStack( jQuery( seletor ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						retornar verdadeiro;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( seletor, self[ i ], ret );
		}

		retornar len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filtro: function(seletor) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	não: function(seletor) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	é: function(seletor) {
		voltar !!winnow(
			esse,

			// Se este for um seletor posicional/relativo, verifique a associação no conjunto retornado
			// então $("p:first").is("p:last") não retornará verdadeiro para um documento com dois "p".
			seletor typeof === "string" && rneedsContext.test( seletor ) ?
				jQuery(seletor):
				seletor || [],
			falso
		).comprimento;
	}
} );


// Inicializa um objeto jQuery


// Uma referência central para a raiz jQuery(document)
var rootjQuery,

	// Uma maneira simples de verificar strings HTML
	// Priorizar #id sobre <tag> para evitar XSS via location.hash (trac-9521)
	// Reconhecimento estrito de HTML (trac-11290: deve começar com <)
	// Atalho simples #id case para velocidade
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function(seletor, contexto, raiz) {
		var corresponder, elem;

		// HANDLE: $(""), $(nulo), $(indefinido), $(falso)
		if (!seletor) {
			devolva isto;
		}

		// O método init() aceita um rootjQuery alternativo
		// então a migração pode suportar jQuery.sub (gh-2101)
		raiz = raiz || rootjQuery;

		// Manipula strings HTML
		if (tipo de seletor === "string" ) {
			if (seletor[ 0 ] === "<" &&
				seletor[ seletor.comprimento - 1 ] === ">" &&
				seletor.comprimento >= 3 ) {

				// Assuma que as strings que começam e terminam com <> são HTML e pule a verificação de regex
				match = [nulo, seletor, nulo];

			} outro {
				match = rquickExpr.exec(seletor);
			}

			// Corresponde html ou certifique-se de que nenhum contexto seja especificado para #id
			if (combinar && (combinar[ 1 ] || !contexto ) ) {

				// HANDLE: $(html) -> $(array)
				if (combinar[1]) {
					context = instância de contexto de jQuery? contexto[ 0 ] : contexto;

					// A opção de executar scripts é verdadeira para back-compat
					// Permitir intencionalmente que o erro seja lançado se parseHTML não estiver presente
					jQuery.merge( this, jQuery.parseHTML(
						corresponder[1],
						context && context.nodeType ? context.ownerDocument || contexto: documento,
						verdadeiro
					) );

					// MANIPULAÇÃO: $(html, props)
					if (rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for (combinar no contexto) {

							// Propriedades de contexto são chamadas como métodos se possível
							if ( isFunction( this[ match ] ) ) {
								esta[correspondência](contexto[correspondência]);

							// ...e de outra forma definido como atributos
							} outro {
								this.attr(correspondência, contexto[correspondência]);
							}
						}
					}

					devolva isto;

				// MANUSEIO: $(#id)
				} outro {
					elem = document.getElementById( match[ 2 ] );

					if (elem) {

						// Injeta o elemento diretamente no objeto jQuery
						este[ 0 ] = elemento;
						this.length = 1;
					}
					devolva isto;
				}

			//HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (contexto || root ).find( seletor );

			// MANIPULAÇÃO: $(expr, contexto)
			// (que é apenas equivalente a: $(context).find(expr)
			} outro {
				return this.constructor(contexto).find(seletor);
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = seletor;
			this.length = 1;
			devolva isto;

		//HANDLE: $(função)
		// Atalho para documento pronto
		} else if (isFunction(seletor)) {
			return root.ready !== indefinido ?
				root.ready(seletor):

				// Executa imediatamente se pronto não estiver presente
				seletor(jQuery);
		}

		return jQuery.makeArray(seletor, this);
	};

// Dê à função init o protótipo jQuery para instanciação posterior
init.prototype = jQuery.fn;

// Inicializa a referência central
rootjQuery = jQuery(documento);


var rparentsprev = /^(?:parents|prev(?:Até|Todos))/,

	// Métodos garantidos para produzir um conjunto único ao iniciar de um conjunto único
	garantido Único = {
		crianças: verdade,
		conteúdo: verdadeiro,
		próximo: verdadeiro,
		anterior: verdadeiro
	};

jQuery.fn.extend( {
	tem: function(alvo) {
		var targets = jQuery( target, this ),
			l = alvos.comprimento;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					retornar verdadeiro;
				}
			}
		} );
	},

	mais próximo: function(seletores, contexto) {
		var cur,
			eu = 0,
			l = this.length,
			correspondido = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Os seletores posicionais nunca correspondem, pois não há contexto _selection_
		if (!rneedsContext.test(seletores)) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== contexto; cur = cur.parentNode ) {

					// Sempre pular fragmentos de documento
					if (cur.nodeType < 11 && (alvos?
						targets.index( cur ) > -1 :

						// Não passe não-elementos para jQuery#find
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						quebrar;
					}
				}
			}
		}

		return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched):matched);
	},

	// Determina a posição de um elemento dentro do conjunto
	index: function(elem) {

		// Sem argumento, retorna índice no pai
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length: -1;
		}

		// Índice no seletor
		if (tipo de elemento === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Localiza a posição do elemento desejado
		return indexOf.call( this,

			// Se receber um objeto jQuery, o primeiro elemento é usado
			elem.jquery ? elemento[ 0 ] : elemento
		);
	},

	adicione: function(seletor, contexto) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( seletor, contexto ) )
			)
		);
	},

	addBack: function(seletor) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( seletor )
		);
	}
} );

função irmão( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	retorno cur;
}

jQuery.each( {
	pai: function(elem) {
		var pai = elem.parentNode;
		return parent && parent.nodeType !== 11 ? pai: nulo;
	},
	pais: function(elem) {
		return dir(elem, "parentNode");
	},
	paisAté: função(elem, _i, até) {
		return dir(elem, "parentNode", até );
	},
	próximo: function(elem) {
		return sibling(elem, "nextSibling" );
	},
	anterior: function(elem) {
		return irmão(elem, "irmãoanterior");
	},
	nextAll: function(elem) {
		return dir(elem, "nextSibling" );
	},
	prevAll: function(elem) {
		return dir(elem, "irmão anterior");
	},
	nextUntil: function( elem, _i, até ) {
		return dir(elem, "nextSibling", até );
	},
	prevUntil: function( elem, _i, até ) {
		return dir(elem, "irmão anterior", até );
	},
	irmãos: function(elem) {
		return irmãos( ( elem.parentNode || {} ).firstChild, elem );
	},
	filhos: function(elem) {
		return irmãos(elem.firstChild);
	},
	conteúdo: function(elem) {
		if ( elem.contentDocument != null &&

			// Suporte: IE 11+
			// elementos <object> sem atributo `data` tem um objeto
			// `contentDocument` com um protótipo `null`.
			getProto(elem.contentDocument)) {

			return elem.contentDocument;
		}

		// Suporte: apenas IE 9 - 11, apenas iOS 7, navegador Android <=4.3 apenas
		// Trate o elemento template como um normal em navegadores que
		// não suporta isso.
		if (nodeName(elem, "modelo")) {
			elem = elem.content || elemento;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, função(nome, fn) {
	jQuery.fn[ nome ] = função( até, seletor ) {
		var matched = jQuery.map( this, fn, until );

		if (name.slice( -5) !== "Até" ) {
			seletor = até;
		}

		if ( seletor && tipo de seletor === "string" ) {
			correspondido = jQuery.filter(seletor, correspondido);
		}

		if ( this.length > 1 ) {

			// Remove duplicatas
			if (!guaranteedUnique[ nome ] ) {
				jQuery.uniqueSort(combinado);
			}

			// Ordem inversa para pais* e derivados anteriores
			if (rparentsprev.test(nome)) {
				matched.reverse();
			}
		}

		return this.pushStack(matched);
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Converte opções formatadas em string em formatadas em objeto
função criarOpções(opções) {
	var objeto = {};
	jQuery.each(options.match(rnothtmlwhite) || [], function(_, flag) {
		objeto[ sinalizador ] = verdadeiro;
	} );
	objeto de retorno;
}

/*
 * Crie uma lista de retorno de chamada usando os seguintes parâmetros:
 *
 * opções: uma lista opcional de opções separadas por espaços que mudarão como
 * a lista de callback se comporta ou um objeto de opção mais tradicional
 *
 * Por padrão, uma lista de retorno de chamada funcionará como uma lista de retorno de chamada de evento e pode ser
 * "disparou" várias vezes.
 *
 * Opções possíveis:
 *
 * once: garantirá que a lista de retorno de chamada possa ser disparada apenas uma vez (como um Deferred)
 *
 * memória: acompanhará os valores anteriores e chamará qualquer callback adicionado
 * após a lista ter sido disparada imediatamente com o último "memorizado"
 * valores (como um Adiado)
 *
 * exclusivo: garantirá que um retorno de chamada possa ser adicionado apenas uma vez (sem duplicatas na lista)
 *
 * stopOnFalse: interrompa chamadas quando um retorno de chamada retornar falso
 *
 */
jQuery.Callbacks = função( opções) {

	// Converte opções do formato String para o formato Object, se necessário
	// (verificamos o cache primeiro)
	opções = tipo de opções === "string" ?
		criarOpções(opções):
		jQuery.extend( {}, opções );

	var // Flag para saber se a lista está disparando no momento
		disparando,

		// Último valor de disparo para listas não esquecíveis
		memória,

		// Flag para saber se a lista já foi disparada
		despedido,

		// Flag para evitar disparos
		bloqueado,

		// lista de callback atual
		lista = [],

		// Fila de dados de execução para listas repetíveis
		fila = [],

		// Índice de retorno de chamada acionado atualmente (modificado por adicionar/remover conforme necessário)
		índice de disparo = -1,

		// Dispara retornos de chamada
		fogo = função() {

			// Aplica disparo único
			bloqueado = bloqueado || opções.uma vez;

			// Executa callbacks para todas as execuções pendentes,
			// respeitando substituições de shootingIndex e alterações de tempo de execução
			disparado = disparando = verdadeiro;
			for ( ; queue.length; shootingIndex = -1 ) {
				memoria = fila.shift();
				while (++firingIndex < lista.comprimento) {

					// Executa callback e verifica se há encerramento antecipado
					if ( list[ shootingIndex ].apply( memory[ 0 ], memory [ 1 ] ) === false &&
						opções.stopOnFalse ) {

						// Pule para o final e esqueça os dados para que .add não seja disparado novamente
						fireIndex = lista.comprimento;
						memória = falso;
					}
				}
			}

			// Esqueça os dados se terminarmos
			if ( !options.memory ) {
				memória = falso;
			}

			disparo = falso;

			// Limpe se terminarmos de atirar de vez
			if (bloqueado) {

				// Mantém uma lista vazia se tivermos dados para futuras chamadas de adição
				if (memória) {
					lista = [];

				// Caso contrário, este objeto é gasto
				} outro {
					lista = "";
				}
			}
		},

		// Objeto de retornos de chamada reais
		auto = {

			// Adiciona um callback ou uma coleção de callbacks à lista
			adicione: função() {
				if ( lista ) {

					// Se tivermos memória de uma execução anterior, devemos disparar após adicionar
					if (memória && !disparando) {
						disparoIndex = lista.comprimento - 1;
						fila.push( memória );
					}

					(função add(args){
						jQuery.each( args, function( _, arg ) {
							if (isFunction(arg)) {
								if (!options.unique || !self.has( arg ) ) {
									lista.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspecionar recursivamente
								add(arg);
							}
						} );
					} )(argumentos);

					if (memória && !disparando) {
						fogo();
					}
				}
				devolva isto;
			},

			// Remove um callback da lista
			remover: function () {
				jQuery.each( argumentos, função( _, arg ) {
					var índice;
					while ((índice = jQuery.inArray(arg, lista, índice)) > -1) {
						lista.splice( índice, 1 );

						// Trata índices de disparo
						if ( índice <= índice de disparo ) {
							fireIndex--;
						}
					}
				} );
				devolva isto;
			},

			// Verifica se um determinado callback está na lista.
			// Se nenhum argumento for fornecido, retorna se a lista possui ou não callbacks anexados.
			tem: function( fn ) {
				retornar f?
					jQuery.inArray( fn, lista ) > -1 :
					lista.comprimento > 0;
			},

			// Remove todos os callbacks da lista
			vazio: function() {
				if ( lista ) {
					lista = [];
				}
				devolva isto;
			},

			// Desabilitar .fire e .add
			// Aborta qualquer execução atual/pendente
			// Limpa todos os callbacks e valores
			desabilitar: function() {
				bloqueado = fila = [];
				lista = memoria = "";
				devolva isto;
			},
			desabilitado: function() {
				retornar !lista;
			},

			// Desabilita .fire
			// Também desabilite .add a menos que tenhamos memória (já que não teria efeito)
			// Aborta qualquer execução pendente
			bloqueio: function () {
				bloqueado = fila = [];
				if ( !memória && !disparando ) {
					lista = memoria = "";
				}
				devolva isto;
			},
			bloqueado: function() {
				retornar !!bloqueado;
			},

			// Chama todos os retornos de chamada com o contexto e os argumentos fornecidos
			fireWith: function( contexto, args ) {
				if ( ! bloqueado ) {
					args = args || [];
					args = [ contexto, args.slice ? args.slice() : args ];
					fila.push( args );
					if ( !disparando ) {
						fogo();
					}
				}
				devolva isto;
			},

			// Chama todos os callbacks com os argumentos dados
			fogo: function() {
				self.fireWith( isto, argumentos );
				devolva isto;
			},

			// Para saber se os callbacks já foram chamados pelo menos uma vez
			disparado: function () {
				retorno !!disparado;
			}
		};

	retornar auto;
};


função Identidade( v ) {
	retornar v;
}
função Lançador (ex) {
	jogue ex;
}

function adoptValue( valor, resolver, rejeitar, noValue ) {
	método var;

	tentar {

		// Verifique primeiro o aspecto da promessa para privilegiar o comportamento síncrono
		if ( valor && isFunction( ( método = valor.promessa ) ) ) {
			method.call( valor ).done( resolver ).fail( rejeitar );

		// Outras possibilidades
		} else if ( valor && isFunction( ( método = valor.então ) ) ) {
			method.call(valor, resolver, rejeitar);

		// Outros não-entáveis
		} outro {

			// Controle os argumentos `resolve` deixando Array#slice converter booleano `noValue` para inteiro:
			// * false: [ valor ].slice( 0 ) => resolve( valor )
			// * verdadeiro: [ valor ].slice( 1 ) => resolve()
			resolve.apply( indefinido, [ valor ].slice( noValue ) );
		}

	// Para Promises/A+, converte exceções em rejeições
	// Já que jQuery.when não desempacota os theables, podemos pular as verificações extras que aparecem em
	// Deferred#then para suprimir condicionalmente a rejeição.
	} pegar ( valor ) {

		// Suporte: apenas Android 4.0
		// Funções de modo estrito invocadas sem .call/.apply obtêm contexto de objeto global
		rejeitar.aplicar(indefinido, [valor]);
	}
}

jQuery.extend( {

	Adiado: function( func ) {
		var tuplas = [

				// ação, adiciona ouvinte, callbacks,
				// ... .then manipuladores, índice de argumento, [estado final]
				[ "notificar", "progresso", jQuery.Callbacks( "memória" ),
					jQuery.Callbacks( "memória" ), 2 ],
				[ "resolver", "concluído", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolvido" ],
				[ "rejeitar", "falha", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejeitado" ]
			],
			estado = "pendente",
			promessa = {
				função estatal() {
					estado de retorno;
				},
				sempre: function() {
					deferred.done(argumentos).fail(argumentos);
					devolva isto;
				},
				"pegar": function( fn ) {
					return promessa.então( null, fn );
				},

				// Mantém o pipe para back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = argumentos;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuplas, function( _i, tupla ) {

							// Mapeia tuplas (progress, done, fail) para argumentos (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { vincular a newDefer ou newDefer.notify })
							// deferred.done(function() { vincular a newDefer ou newDefer.resolve })
							// deferred.fail(function() { vincular a newDefer ou newDefer.reject })
							deferido[ tupla[ 1 ] ]( function() {
								var retornado = fn && fn.apply( isto, argumentos );
								if (retornou && isFunction(retornou.promise)) {
									devolvido.promessa()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} outro {
									newDefer[ tupla[ 0 ] + "Com" ](
										esse,
										fn? [retornou]: argumentos
									);
								}
							} );
						} );
						fns = nulo;
					} ).promessa();
				},
				então: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					função resolve( profundidade, adiada, manipulador, especial ) {
						função return() {
							var que = isso,
								args = argumentos,
								mayThrow = function() {
									var retornou, então;

									// Suporte: Promessas/A+ seção 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignora tentativas de resolução dupla
									if ( profundidade < maxDepth ) {
										retornar;
									}

									retornado = handler.apply( that, args );

									// Suporte: Promessas/A+ seção 2.3.1
									// https://promisesaplus.com/#point-48
									if (retornou === deferred.promise()) {
										throw new TypeError("Enable auto-resolução");
									}

									// Suporte: Promessas/seções A+ 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Recupera `then` apenas uma vez
									então = retornado &&

										// Suporte: Promessas/A+ seção 2.3.4
										// https://promisesaplus.com/#point-64
										// Apenas verifica objetos e funções quanto à sua capacidade
										( typeof retornado === "objeto" ||
											typeof retornado === "função" ) &&
										retornado.então;

									// Manipula um thenable retornado
									if (éFunção(então)) {

										// Processadores especiais (notificar) apenas aguardar a resolução
										se ( especial ) {
											Em seguida, ligue(
												devolvida,
												resolve(maxDepth, adiado, Identidade, especial),
												resolve(maxDepth, diferido, Thrower, especial)
											);

										// Processadores normais (resolver) também se conectam ao progresso
										} outro {

											// ...e desconsidera valores de resolução mais antigos
											maxDepth++;

											Em seguida, ligue(
												devolvida,
												resolve(maxDepth, adiado, Identidade, especial),
												resolve(maxDepth, diferido, Thrower, especial),
												resolve(maxDepth, adiado, Identidade,
													adiado.notifyWith )
											);
										}

									// Trata todos os outros valores retornados
									} outro {

										// Somente manipuladores substitutos passam o contexto
										// e vários valores (comportamento não específico)
										if ( manipulador !== Identidade ) {
											que = indefinido;
											args = [retornou];
										}

										// Processa o(s) valor(es)
										// O processo padrão é resolver
										( especial || deferred.resolveWith )( that, args );
									}
								},

								// Apenas processadores normais (resolvem) capturam e rejeitam exceções
								processo = especial ?
									mayThrow:
									função() {
										tentar {
											mayThrow();
										} pegar ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.error );
											}

											// Suporte: Promessas/A+ seção 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignora exceções pós-resolução
											if ( profundidade + 1 >= maxDepth ) {

												// Somente manipuladores substitutos passam o contexto
												// e vários valores (comportamento não específico)
												if ( manipulador !== Lançador ) {
													que = indefinido;
													args = [e];
												}

												deferred.rejectWith( isso, args );
											}
										}
									};

							// Suporte: Promessas/A+ seção 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Resolva promessas imediatamente para evitar falsas rejeições de
							// erros subseqüentes
							if ( profundidade ) {
								processo();
							} outro {

								// Chama um hook opcional para registrar o erro, em caso de exceção
								// já que é perdido quando a execução fica assíncrona
								if ( jQuery.Deferred.getErrorHook ) {
									process.error = jQuery.Deferred.getErrorHook();

								// O alias obsoleto acima. Embora o nome sugira
								// retornando a pilha, não uma instância de erro, jQuery apenas passa
								// diretamente para `console.warn` para que ambos funcionem; uma instância
								// apenas coopera melhor com os mapas de origem.
								} else if ( jQuery.Deferred.getStackHook ) {
									process.error = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( processo );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuplas[ 0 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onProgress) ?
									em progresso :
									Identidade,
								newDefer.notifyWith
							)
						);

						// cumprido_handlers.add( ... )
						tuplas[ 1 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onFulfilled) ?
									onCumprido:
									Identidade
							)
						);

						// rejeitado_handlers.add( ... )
						tuplas[ 2 ][ 3 ].add(
							resolver(
								0,
								novoAdiar,
								isFunction(onRejected) ?
									onRejected:
									Atirador
							)
						);
					} ).promessa();
				},

				// Obter uma promessa para este diferido
				// Se obj for fornecido, o aspecto de promessa é adicionado ao objeto
				promessa: function( obj ) {
					return obj != null ? jQuery.extend(obj, promessa): promessa;
				}
			},
			diferido = {};

		// Adicionar métodos específicos da lista
		jQuery.each( tuplas, função( i, tupla ) {
			var lista = tupla[ 2 ],
				estadoString = tuple[ 5 ];

			// promessa.progresso = lista.add
			// promessa.done = list.add
			// promessa.fail = list.add
			promessa[ tupla[ 1 ] ] = lista.add;

			// Manipula o estado
			if (estadoString) {
				lista.adicionar(
					função() {

						// estado = "resolvido" (ou seja, cumprido)
						// estado = "rejeitado"
						estado = estadoString;
					},

					// rejeição_callbacks.disable
					// cumprido_callbacks.disable
					tuplas[ 3 - i ][ 2 ].desativar,

					// rejeitado_handlers.disable
					// cumprido_handlers.disable
					tuplas[ 3 - i ][ 3 ].desativar,

					// progress_callbacks.lock
					tuplas[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuplas[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// cumprido_handlers.fire
			// rejeitado_handlers.fire
			list.add(tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferido[ tupla[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				devolva isto;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Faça do adiado uma promessa
		promessa.promessa( adiada );

		// Chama a função fornecida se houver
		if (função) {
			func.call( adiado, adiado );
		}

		// Tudo feito!
		retorno diferido;
	},

	// ajudante diferido
	quando: function( singleValue ) {
		var

			// contagem de subordinados incompletos
			restante = argumentos.comprimento,

			// contagem de argumentos não processados
			i = restante,

			// dados de atendimento subordinados
			resolveContexts = Array( i ),
			resolveValues ​​= slice.call(argumentos),

			// o principal diferido
			primário = jQuery.Deferred(),

			// fábrica de retorno de chamada subordinada
			updateFunc = function(i) {
				return function( valor ) {
					resolveContexts[i] = this;
					resolveValues[ i ] = argumentos.comprimento > 1 ? slice.call(argumentos): valor;
					if ( !( --restante ) ) {
						primário.resolveWith( resolveContexts, resolveValues ​​);
					}
				};
			};

		// Argumentos simples e vazios são adotados como Promise.resolve
		if (restante <= 1) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!restante );

			// Use .then() para desembrulhar os thenables secundários (cf. gh-3000)
			if ( primary.state() === "pendente" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primário.então();
			}
		}

		// Múltiplos argumentos são agregados como elementos do array Promise.all
		enquanto eu-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primário.promessa();
	}
} );


// Geralmente indicam um erro do programador durante o desenvolvimento,
// alerta sobre eles o mais rápido possível, em vez de engoli-los por padrão.
var rerrorNames = /^(Eval|Interno|Intervalo|Referência|Sintaxe|Tipo|URI)Error$/;

// Se `jQuery.Deferred.getErrorHook` for definido, `asyncError` é um erro
// capturado antes da barreira assíncrona para obter a causa original do erro
// que, de outra forma, pode estar oculto.
jQuery.Deferred.exceptionHook = function(erro, asyncError) {

	// Suporte: IE 8 - 9 somente
	// O console existe quando as ferramentas de desenvolvimento estão abertas, o que pode acontecer a qualquer momento
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "exceção jQuery.Deferred: " + error.message,
			error.stack, asyncError );
	}
};




jQuery.readyException = function(erro) {
	window.setTimeout( function() {
		lançar erro;
	} );
};




// O diferido usado no DOM pronto
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	lista pronta
		.então ( fn )

		// Envolva jQuery.readyException em uma função para que a pesquisa
		// acontece no momento do tratamento de erro ao invés do retorno de chamada
		// cadastro.
		.catch(função(erro){
			jQuery.readyException(erro);
		} );

	devolva isto;
};

jQuery.extend( {

	// O DOM está pronto para ser usado? Defina como verdadeiro assim que ocorrer.
	isReady: falso,

	// Um ​​contador para rastrear quantos itens esperar antes
	// o evento pronto dispara. Veja trac-6781
	prontoEspera: 1,

	// Trata quando o DOM está pronto
	pronto: function(espera) {

		// Abortar se houver retenções pendentes ou já estivermos prontos
		if (espera === true? --jQuery.readyWait: jQuery.isReady) {
			retornar;
		}

		// Lembre-se que o DOM está pronto
		jQuery.isReady = verdadeiro;

		// Se um evento DOM Ready normal disparar, diminua e aguarde se necessário
		if ( espere !== true && --jQuery.readyWait > 0 ) {
			retornar;
		}

		// Se houver funções vinculadas, para executar
		readyList.resolveWith(documento, [jQuery]);
	}
} );

jQuery.ready.then = readyList.then;

// O manipulador de eventos pronto e o método de autolimpeza
função concluída() {
	document.removeEventListener( "DOMContentLoaded", concluído );
	window.removeEventListener("carregar", concluído);
	jQuery.ready();
}

// Captura casos em que $(document).ready() é chamado
// depois que o evento do navegador já ocorreu.
// Suporte: IE <=9 - 10 apenas
// IE mais antigo às vezes sinaliza "interativo" muito cedo
if ( document.readyState === "completo" ||
	( document.readyState !== "carregando" && !document.documentElement.doScroll ) ) {

	// Manipule-o de forma assíncrona para permitir que os scripts tenham a oportunidade de atrasar o pronto
	window.setTimeout( jQuery.ready );

} outro {

	// Use o retorno de chamada de evento útil
	document.addEventListener( "DOMContentLoaded", concluído );

	// Um ​​substituto para window.onload, que sempre funcionará
	window.addEventListener("carregar", concluído);
}




// Método multifuncional para obter e definir valores de uma coleção
// O(s) valor(es) podem opcionalmente ser executados se for uma função
var access = function(elems, fn, key, value, chainable, emptyGet, raw) {
	var i = 0,
		len = elems.length,
		massa = chave == null;

	// Define muitos valores
	if ( toType( chave ) === "objeto" ) {
		encadeável = verdadeiro;
		for ( i na chave ) {
			access(elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Define um valor
	} else if ( valor !== indefinido ) {
		encadeável = verdadeiro;

		if (!isFunction( valor ) ) {
			bruto = verdadeiro;
		}

		if (em massa) {

			// Operações em massa são executadas em todo o conjunto
			if (bruto) {
				fn.call(elems, valor);
				fn = nulo;

			// ...exceto ao executar valores de função
			} outro {
				massa = fn;
				fn = function(elem, _key, valor) {
					return bulk.call( jQuery( elem ), valor );
				};
			}
		}

		se ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], chave, raw ?
						valor :
						value.call(elems[i],i,fn(elems[i],chave))
				);
			}
		}
	}

	if ( encadeável ) {
		elementos de retorno;
	}

	// Obtém
	if (em massa) {
		return fn.call(elems);
	}

	Devolve Len? fn(elems[ 0 ], key ): emptyGet;
};


// Corresponde à string tracejada para camelizar
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([az])/g;

// Usado por camelCase como callback para replace()
função fcamelCase( _all, letra ) {
	return letter.toUpperCase();
}

// Converte tracejado para camelCase; usado pelos módulos css e dados
// Suporte: IE <=9 - 11, Edge 12 - 15
// A Microsoft esqueceu de alterar o prefixo do fornecedor (trac-9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var aceitarDados = function(proprietário) {

	// Aceita apenas:
	// - Nó
	// - Node.ELEMENT_NODE
	// - Node.DOCUMENT_NODE
	// - Objeto
	// - Qualquer
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




função Dados() {
	this.expando = jQuery.expando + Data.uid++;
}

dados.uid = 1;

Data.prototype = {

	cache: função (proprietário) {

		// Verifica se o objeto proprietário já possui um cache
		var value = owner[ this.expando ];

		// Se não, crie um
		if ( !valor ) {
			valor = {};

			// Podemos aceitar dados para nós não elementares em navegadores modernos,
			// mas não devemos, veja trac-8335.
			// Sempre retorna um objeto vazio.
			if (aceitarDados(proprietário)) {

				// Se for um nó improvável de ser stringificado ou repetido
				// usa atribuição simples
				if (owner.nodeType) {
					proprietário[ this.expandindo ] = valor;

				// Caso contrário, proteja-o em uma propriedade não enumerável
				// configurável deve ser verdadeiro para permitir que a propriedade seja
				// excluído quando os dados são removidos
				} outro {
					Object.defineProperty(proprietário, this.expandindo, {
						valor: valor,
						configurável: verdadeiro
					} );
				}
			}
		}

		valor de retorno;
	},
	set: function(proprietário, dados, valor) {
		suporte var,
			cache = this.cache(proprietário);

		// Handle: [proprietário, chave, valor] args
		// Sempre use a chave camelCase (gh-2257)
		if (tipo de dado === "string" ) {
			cache[ camelCase(dados)] = valor;

		// Handle: [proprietário, {propriedades}] args
		} outro {

			// Copia as propriedades uma a uma para o objeto cache
			for ( prop em dados ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		cache de retorno;
	},
	get: function(proprietário, chave) {
		tecla de retorno === indefinido?
			this.cache(proprietário):

			// Sempre use a chave camelCase (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	acesso: function(proprietário, chave, valor) {

		// Nos casos em que:
		//
		// 1. Nenhuma chave foi especificada
		// 2. Uma chave de string foi especificada, mas nenhum valor foi fornecido
		//
		// Pegue o caminho "read" e permita que o método get determine
		// qual valor retornar, respectivamente:
		//
		// 1. Todo o objeto de cache
		// 2. Os dados armazenados na chave
		//
		if (tecla === indefinido ||
				((chave && tipo de chave === "string") && valor === indefinido) ) {

			return this.get(proprietário, chave);
		}

		// Quando a chave não é uma string, ou tanto uma chave quanto um valor
		// são especificados, definidos ou estendidos (objetos existentes) com:
		//
		// 1. Um objeto de propriedades
		// 2. Uma chave e um valor
		//
		this.set(proprietário, chave, valor);

		// Uma vez que o caminho "set" pode ter dois pontos de entrada possíveis
		// retorna os dados esperados com base em qual caminho foi tomado[*]
		valor de retorno !== indefinido ? valor : chave;
	},
	remover: function(proprietário, chave) {
		var eu,
			cache = dono[ this.expandindo ];

		if ( cache === indefinido ) {
			retornar;
		}

		if ( chave !== indefinido ) {

			// Suporta array ou string de chaves separadas por espaço
			if (Array.isArray(chave)) {

				// Se a chave for um array de chaves...
				// Nós sempre definimos chaves camelCase, então remova isso.
				key = key.map( camelCase );
			} outro {
				chave = camelCase( chave );

				// Se existir uma chave com os espaços, use-a.
				// Caso contrário, crie uma matriz combinando não-espaço em branco
				chave = chave no cache?
					[ chave ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = chave.comprimento;

			enquanto eu-- ) {
				excluir cache[chave[i]];
			}
		}

		// Remove o expando se não houver mais dados
		if (chave === indefinido || jQuery.isEmptyObject( cache ) ) {

			// Suporte: Chrome <=35 - 45
			// O desempenho do Webkit & Blink sofre ao excluir propriedades
			// a partir de nós DOM, então defina como indefinido
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restrito)
			if (owner.nodeType) {
				proprietário[ this.expandindo ] = indefinido;
			} outro {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function(proprietário) {
		var cache = owner[ this.expando ];
		cache de retorno !== indefinido && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



// Resumo da Implementação
//
// 1. Aplicar superfície API e compatibilidade semântica com ramificação 1.9.x
// 2. Melhorar a capacidade de manutenção do módulo reduzindo o armazenamento
// caminhos para um único mecanismo.
// 3. Use o mesmo mecanismo único para oferecer suporte a dados "privados" e "usuários".
// 4. _Nunca_ exponha dados "privados" ao código do usuário (TODO: Drop _data, _removeData)
// 5. Evite expor detalhes de implementação em objetos de usuário (por exemplo, propriedades expando)
// 6. Fornecer um caminho claro para atualização de implementação para WeakMap em 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[AZ]/g;

função getData( dados ) {
	if (dados === "verdadeiro" ) {
		retornar verdadeiro;
	}

	if (dados === "falso" ) {
		retorna falso;
	}

	if (dados === "nulo" ) {
		retornar nulo;
	}

	// Só converte para um número se não mudar a string
	if (dados === +dados + "") {
		retornar +dados;
	}

	if (rbrace.test(data)) {
		return JSON.parse( dados );
	}

	dados de retorno;
}

function dataAttr(elem, key, data) {
	var nome;

	// Se nada for encontrado internamente, tente buscar algum
	// dados do atributo data-* do HTML5
	if ( dados === undefined && elem.nodeType === 1 ) {
		nome = "dados-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		dados = elem.getAttribute(nome);

		if (tipo de dado === "string" ) {
			tentar {
				dados = getDados(dados);
			} pegar ( e ) {}

			// Certifique-se de definir os dados para que não sejam alterados posteriormente
			dataUser.set(elem, chave, dados);
		} outro {
			dados = indefinido;
		}
	}
	dados de retorno;
}

jQuery.extend( {
	hasData: function(elem) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	dados: função(elem, nome, dados) {
		return dataUser.access(elem, nome, dados);
	},

	removeData: function(elem, nome) {
		dataUser.remove(elem, nome);
	},

	// TODO: Agora que todas as chamadas para _data e _removeData foram substituídas
	// com chamadas diretas para métodos dataPriv, eles podem ser obsoletos.
	_data: função(elem, nome, dados) {
		return dataPriv.access(elem, nome, dados);
	},

	_removeData: function(elem, nome) {
		dataPriv.remove(elem, nome);
	}
} );

jQuery.fn.extend( {
	dados: function(chave, valor) {
		var i, nome, dados,
			elemento = este[ 0 ],
			attrs = elem && elem.atributos;

		// Obtém todos os valores
		if (tecla === indefinido) {
			if ( this.length ) {
				dados = dataUser.get(elem);

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					enquanto eu-- ) {

						// Suporte: somente IE 11
						// Os elementos attrs podem ser nulos (trac-14894)
						if (attrs[i]) {
							nome = attrs[i].nome;
							if (name.indexOf("dados-") === 0) {
								nome = camelCase( nome.fatia( 5 ) );
								dataAttr(elem, nome, dados[ nome ] );
							}
						}
					}
					dataPriv.set(elem, "hasDataAttrs", true );
				}
			}

			dados de retorno;
		}

		// Define vários valores
		if (tipo de chave === "objeto" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var dados;

			// O objeto jQuery de chamada (correspondências de elemento) não está vazio
			// (e, portanto, tem um elemento aparece neste [ 0 ]) e o
			// O parâmetro `value` não era indefinido. Um objeto jQuery vazio
			// resultará em `indefinido` para elem = this[ 0 ] que irá
			// lança uma exceção se for feita uma tentativa de ler um cache de dados.
			if (elem && valor === indefinido) {

				// Tenta obter dados do cache
				// A chave sempre será camelCased em Data
				dados = dataUser.get(elem, chave);
				if ( dados !== indefinido ) {
					dados de retorno;
				}

				// Tenta "descobrir" os dados em
				// dados personalizados HTML5-* attrs
				dados = dataAttr(elem, chave);
				if ( dados !== indefinido ) {
					dados de retorno;
				}

				// Nós tentamos muito, mas os dados não existem.
				retornar;
			}

			// Define os dados...
			this.each( função() {

				// Sempre armazenamos a chave camelCased
				dataUser.set( this, key, value );
			} );
		}, nulo, valor, argumentos.comprimento > 1, nulo, verdadeiro );
	},

	removeData: function(chave) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	fila: function(elem, type, data) {
		var fila;

		if (elem) {
			tipo = ( tipo || "fx" ) + "fila";
			fila = dataPriv.get(elem, tipo);

			// Acelera o desenfileiramento saindo rapidamente se for apenas uma pesquisa
			if ( dados ) {
				if (!fila || Array.isArray( dados ) ) {
					fila = dataPriv.access(elem, tipo, jQuery.makeArray(dados));
				} outro {
					fila.push( dados );
				}
			}
			fila de retorno || [];
		}
	},

	desenfileirar: function(elem, type) {
		tipo = tipo || "fx";

		var fila = jQuery.queue(elem, tipo),
			startLength = fila.comprimento,
			fn = fila.shift(),
			ganchos = jQuery._queueHooks(elem, tipo),
			proximo = function() {
				jQuery.dequeue(elem, tipo);
			};

		// Se a fila fx for desenfileirada, sempre remova a sentinela de progresso
		if ( fn === "em andamento") {
			fn = fila.shift();
			comprimentoinício--;
		}

		se ( fn ) {

			// Adiciona uma sentinela de progresso para evitar que a fila fx seja
			// desenfileirado automaticamente
			if (digite === "fx") {
				fila.unshift("em andamento");
			}

			// Limpa a última função de parada da fila
			excluir hooks.stop;
			fn.call(elem, próximo, ganchos);
		}

		if (!startLength && ganchos) {
			hooks.empty.fire();
		}
	},

	// Não público - gera um objeto queueHooks ou retorna o atual
	_queueHooks: function(elem, type) {
		var chave = tipo + "queueHooks";
		return dataPriv.get(elem, chave) || dataPriv.access(elem, chave, {
			vazio: jQuery.Callbacks( "memória única" ).add( function() {
				dataPriv.remove(elem, [ tipo + "fila", chave ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	fila: function(tipo, dados) {
		var configurador = 2;

		if ( tipo do tipo !== "string" ) {
			dados = tipo;
			tipo = "fx";
			normatizador--;
		}

		if (argumentos.comprimento <setter) {
			return jQuery.queue( this[ 0 ], digite );
		}

		dados de retorno === indefinido?
			esse :
			this.each( função() {
				var fila = jQuery.queue( this, type, data );

				// Garante um gancho para esta fila
				jQuery._queueHooks( this, type );

				if ( digite === "fx" && fila[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	desenfileirar: function(tipo) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( tipo ) {
		return this.queue( type || "fx", [] );
	},

	// Obtém uma promessa resolvida quando filas de um certo tipo
	// são esvaziados (fx é o tipo padrão)
	promessa: função (tipo, obj) {
		var tmp,
			contagem = 1,
			defer = jQuery.Deferred(),
			elementos = isso,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith(elementos, [elementos]);
				}
			};

		if ( tipo do tipo !== "string" ) {
			obj = tipo;
			tipo = indefinido;
		}
		tipo = tipo || "fx";

		enquanto eu-- ) {
			tmp = dataPriv.get(elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.vazio ) {
				contar++;
				tmp.empty.add( resolver );
			}
		}
		resolver();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([az%]*)$", "i" );


var cssExpand = ["Superior", "Direita", "Inferior", "Esquerda"];

var documentElement = document.documentElement;



	var isAttached = function(elem) {
			return jQuery.contains(elem.ownerDocument, elem);
		},
		composto = { composto: verdadeiro };

	// Suporte: IE 9 - 11+, Edge 12 - 18+, apenas iOS 10.0 - 10.2
	// Verifica o anexo nos limites do shadow DOM quando possível (gh-3504)
	// Suporte: apenas iOS 10.0-10.2
	// As primeiras versões do iOS 10 suportam `attachShadow`, mas não `getRootNode`,
	// levando a erros. Precisamos verificar `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function(elem) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composto ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function(elem, el) {

		// isHiddenWithinTree pode ser chamado da função jQuery#filter;
		// nesse caso, o elemento será o segundo argumento
		elem = el || elemento;

		// O estilo inline supera todos
		return elem.style.display === "nenhum" ||
			elem.style.display === "" &&

			// Caso contrário, verifica o estilo computado
			// Suporte: Firefox <=43 - 45
			// Elementos desconectados podem ter display calculado: nenhum, então primeiro confirme se elem é
			// no documento.
			isAttached(elem) &&

			jQuery.css( elem, "exibir" ) === "nenhum";
	};



function ajusteCSS(elem, prop, valueParts, tween) {
	var ajustado, escala,
		maxIterações = 20,
		valoratual = interpolação?
			função() {
				return tween.cur();
			} :
			função() {
				return jQuery.css(elem, prop, "" );
			},
		inicial = valoratual(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// O cálculo do valor inicial é necessário para possíveis incompatibilidades de unidades
		inicialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unidade !== "px" && +inicial ) &&
			rcssNum.exec(jQuery.css(elem, prop));

	if ( inicialInUnit && inicialInUnit[ 3 ] !== unidade ) {

		// Suporte: Firefox <=54
		// Reduzir pela metade o valor de destino da iteração para evitar interferência dos limites superiores do CSS (gh-2144)
		inicial = inicial / 2;

		// Unidades de confiança relatadas por jQuery.css
		unidade = unidade || inicialInUnit[ 3 ];

		// Aproxima iterativamente de um ponto inicial diferente de zero
		inicialInUnit = +inicial || 1;

		while ( maxIterations-- ) {

			// Avalia e atualiza nosso melhor palpite (duplicando palpites que zeram).
			// Termina se a escala for igual ou cruzada a 1 (tornando o produto antigo*novo não positivo).
			jQuery.style(elem, prop, initialInUnit + unidade);
			if ( (1 - escala ) * ( 1 - ( escala = currentValue() / inicial || 0,5 ) ) <= 0 ) {
				maxIterações = 0;
			}
			inicialInUnit = inicialInUnit / escala;

		}

		inicialInUnit = inicialInUnit * 2;
		jQuery.style(elem, prop, initialInUnit + unidade);

		// Certifique-se de atualizar as propriedades de interpolação mais tarde
		valueParts = valueParts || [];
	}

	if ( partes de valor ) {
		inicialInUnit = +inicialInUnit || +inicial || 0;

		// Aplicar deslocamento relativo (+=/-=) se especificado
		ajustado = valueParts[ 1 ] ?
			inicialInUnit + (valorParts[ 1 ] + 1 ) * valorParts[ 2 ] :
			+valorPartes[ 2 ];
		if (entre) {
			tween.unit = unidade;
			tween.start = inicialInUnit;
			tween.end = ajustado;
		}
	}
	retorno ajustado;
}


var defaultDisplayMap = {};

function getDefaultDisplay(elem) {
	temperatura variável,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if (exibir) {
		exibição de retorno;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if (exibir === "nenhum" ) {
		exibição = "bloco";
	}
	defaultDisplayMap[ nodeName ] = exibição;

	exibição de retorno;
}

função mostrarOcultar(elementos, mostrar) {
	exibição var, elem,
		valores = [],
		índice = 0,
		comprimento = elementos.comprimento;

	// Determina novo valor de exibição para elementos que precisam mudar
	for ( ; índice < comprimento; índice++ ) {
		elem = elementos[ índice ];
		if (!elem.style) {
			continuar;
		}

		display = elem.style.display;
		se ( mostrar ) {

			// Como forçamos a visibilidade sobre os elementos ocultos em cascata, um imediato (e lento)
			// a verificação é necessária neste primeiro loop, a menos que tenhamos um valor de exibição não vazio (seja
			// inline ou prestes a ser restaurado)
			if (exibir === "nenhum" ) {
				valores[ index ] = dataPriv.get( elem, "display" ) || nulo;
				if (!valores[ índice ] ) {
					elem.style.display = "";
				}
			}
			if (elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				valores[ index ] = getDefaultDisplay( elem );
			}
		} outro {
			if (display!== "nenhum") {
				valores[ índice ] = "nenhum";

				// Lembre-se do que estamos substituindo
				dataPriv.set(elem, "display", display);
			}
		}
	}

	// Define a exibição dos elementos em um segundo loop para evitar refluxo constante
	for (índice = 0; índice < comprimento; índice++) {
		if (valores[ índice ] != null ) {
			elementos[ índice ].estilo.display = valores[ índice ];
		}
	}

	elementos de retorno;
}

jQuery.fn.extend( {
	mostre: função() {
		return showHide( this, true );
	},
	ocultar: função() {
		return mostrarOcultar(este);
	},
	alternar: function(estado) {
		if (tipo de estado === "booleano" ) {
			estado de retorno? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery(este).show();
			} outro {
				jQuery(este).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([az][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( função() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Suporte: Android 4.0 - 4.3 apenas
	// Verifica o estado perdido se o nome estiver definido (trac-11217)
	// Suporte: Windows Web Apps (WWA)
	// `name` e `type` devem usar .setAttribute para WWA (trac-14901)
	input.setAttribute( "tipo", "radio" );
	input.setAttribute( "verificado", "verificado" );
	input.setAttribute( "nome", "t" );

	div.appendChild( entrada );

	// Suporte: Android <=4.1 somente
	// O WebKit mais antigo não clona o estado verificado corretamente em fragmentos
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Suporte: IE <=11 somente
	// Certifique-se de que textarea (e caixa de seleção) defaultValue está clonado corretamente
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Suporte: IE <=9 apenas
	// IE <=9 substitui tags <option> por seus conteúdos quando inseridos fora de
	// o elemento selecionado.
	div.innerHTML = "<opção></opção>";
	support.option = !!div.lastChild;
} )();


// Temos que fechar essas tags para suportar XHTML (trac-13200)
var wrapMap = {

	// Analisadores XHTML não inserem magicamente elementos no
	// da mesma forma que os analisadores de sopa de tags fazem. Então não podemos encurtar
	// isso omitindo <tbody> ou outros elementos necessários.
	cabeçalho: [ 1, "<tabela>", "</tabela>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_padrão: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Suporte: IE <=9 apenas
if (!suporte.opção) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( contexto, tag ) {

	// Suporte: IE <=9 - 11 somente
	// Use typeof para evitar invocação de método de argumento zero em objetos de host (trac-15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "indefinido" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "indefinido" ) {
		ret = context.querySelectorAll( tag || "*" );

	} outro {
		ret = [];
	}

	if ( tag === indefinido || tag && nodeName( contexto, tag ) ) {
		return jQuery.merge( [ contexto ], ret );
	}

	retorno ret;
}


// Marca os scripts como já avaliados
function setGlobalEval(elems, refElements) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elementos[ i ],
			"globalEval",
			!refElementos || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

função buildFragment(elems, contexto, scripts, seleção, ignorados) {
	var elem, tmp, tag, embrulhar, anexado, j,
		fragmento = context.createDocumentFragment(),
		nós = [],
		eu = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[i];

		if (elem || elem === 0) {

			// Adiciona nós diretamente
			if (toType(elem) === "objeto" ) {

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge( nós, elem.nodeType ? [ elem ] : elem );

			// Converte não-html em um nó de texto
			} else if (!rhtml.test(elem)) {
				nodes.push( context.createTextNode( elem ) );

			// Converte html em nós DOM
			} outro {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Desserializa uma representação padrão
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ marca ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Desce pelos wrappers até o conteúdo correto
				j = embrulhar[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
				// push.apply(_, arraylike) lança no antigo WebKit
				jQuery.merge( nós, tmp.childNodes );

				// Lembre-se do contêiner de nível superior
				tmp = fragmento.firstChild;

				// Certifique-se de que os nós criados sejam órfãos (trac-12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper do fragmento
	fragmento.textContent = "";

	i = 0;
	while ((elem = nós[i++])) {

		// Ignora elementos já na coleção de contexto (trac-4087)
		if (seleção && jQuery.inArray(elem, seleção) > -1) {
			se (ignorado) {
				ignorado.push(elem);
			}
			continuar;
		}

		anexado = isAttached(elem);

		// Anexar ao fragmento
		tmp = getAll(fragment.appendChild(elem), "script");

		// Preserva o histórico de avaliação do script
		if ( anexado ) {
			setGlobalEval( tmp );
		}

		// Captura executáveis
		if (scripts) {
			j = 0;
			while ((elem = tmp[j++])){
				if ( rscriptType.test(elem.type || "" ) ) {
					scripts.push(elem);
				}
			}
		}
	}

	fragmento de retorno;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	retornar verdadeiro;
}

function returnFalse() {
	retorna falso;
}

função on(elem, tipos, seletor, dados, fn, um) {
	var origem, tipo;

	// Os tipos podem ser um mapa de tipos/manipuladores
	if (tipo de tipos === "objeto" ) {

		// (tipos-objeto, seletor, dados)
		if (tipo de seletor !== "string" ) {

			// (tipos-objeto, dados)
			dados = dados || seletor;
			seletor = indefinido;
		}
		for ( digite tipos ) {
			on(elem, type, selector, data, types[ type ], one );
		}
		elemento de retorno;
	}

	if ( dados == null && fn == null ) {

		// (tipos, fn)
		fn = seletor;
		dados = seletor = indefinido;
	} senão if ( fn == nulo ) {
		if (tipo de seletor === "string" ) {

			// (tipos, seletor, fn)
			fn = dados;
			dados = indefinido;
		} outro {

			// (tipos, dados, fn)
			fn = dados;
			dados = seletor;
			seletor = indefinido;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} senão if ( !fn ) {
		elemento de retorno;
	}

	if ( um === 1 ) {
		origemFn = fn;
		fn = função( evento ) {

			// Pode usar um conjunto vazio, pois o evento contém as informações
			jQuery().off( evento );
			return origFn.apply( isto, argumentos );
		};

		// Use o mesmo guid para que o chamador possa remover usando origFn
		fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
	}
	return elem.each( function() {
		jQuery.event.add(este, tipos, fn, dados, seletor);
	} );
}

/*
 * Funções auxiliares para gerenciamento de eventos -- não fazem parte da interface pública.
 * Adereços à biblioteca addEvent de Dean Edwards para muitas das ideias.
 */
jQuery.event = {

	globais: {},

	add: function(elem, types, handler, data, selector) {

		var handleObjIn, eventHandle, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.get(elem);

		// Apenas anexa eventos a objetos que aceitam dados
		if (!acceptData(elem)) {
			retornar;
		}

		// O chamador pode passar um objeto de dados personalizados no lugar do manipulador
		if (manipulador.manipulador) {
			handleObjIn = manipulador;
			manipulador = handleObjIn.handler;
			seletor = handleObjIn.seletor;
		}

		// Certifique-se de que seletores inválidos lancem exceções no tempo de anexação
		// Avalia contra documentElement no caso de elem ser um nó não-elemento (por exemplo, document)
		if (seletor) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Certifique-se de que o manipulador tenha um ID exclusivo, usado para localizá-lo/removê-lo posteriormente
		if (!handler.guid) {
			handler.guid = jQuery.guid++;
		}

		// Inicia a estrutura de eventos do elemento e o manipulador principal, se este for o primeiro
		if ( !( eventos = elemData.events ) ) {
			eventos = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Descarta o segundo evento de um jQuery.event.trigger() e
				// quando um evento é chamado depois que uma página foi descarregada
				return typeof jQuery !== "indefinido" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply(elem, argumentos): indefinido;
			};
		}

		// Trata vários eventos separados por um espaço
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec(tipos[t]) || [];
			tipo = tipo de origem = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// *deve* haver um tipo, sem anexar manipuladores somente de namespace
			if ( !tipo ) {
				continuar;
			}

			// Se o evento mudar de tipo, use os manipuladores de eventos especiais para o tipo alterado
			especial = jQuery.event.special[ tipo ] || {};

			// Se o seletor for definido, determina o tipo de API do evento especial, caso contrário, o tipo fornecido
			type = ( seletor ? special.delegateType : special.bindType ) || tipo;

			// Atualização especial com base no novo tipo de redefinição
			especial = jQuery.event.special[ tipo ] || {};

			// handleObj é passado para todos os manipuladores de eventos
			handleObj = jQuery.extend( {
				tipo: tipo,
				origType: origType,
				dados: dados,
				manipulador: manipulador,
				guid: handler.guid,
				seletor: seletor,
				needContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn);

			// Inicia a fila do manipulador de eventos se formos os primeiros
			if (!(manipuladores = eventos[tipo])){
				manipuladores = eventos[tipo] = [];
				manipuladores.delegateCount = 0;

				// Só use addEventListener se o manipulador de eventos especiais retornar false
				if (!special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === F alse ) {

					if (elem.addEventListener) {
						elem.addEventListener( tipo, eventHandle );
					}
				}
			}

			if ( especial.add ) {
				special.add.call(elem, handleObj);

				if (!handleObj.handler.guid) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Adiciona à lista de manipuladores do elemento, delegados na frente
			if (seletor) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} outro {
				handlers.push( handleObj );
			}

			// Acompanhe quais eventos já foram usados, para otimização de eventos
			jQuery.event.global[tipo] = verdadeiro;
		}

	},

	// Desanexa um evento ou conjunto de eventos de um elemento
	remover: função(elem, tipos, manipulador, seletor, mappedTypes) {

		var j, origCount, tmp,
			eventos, t, handleObj,
			especial, manipuladores, tipo, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( eventos = elemData.events ) ) {
			retornar;
		}

		// Uma vez para cada type.namespace em tipos; tipo pode ser omitido
		tipos = ( tipos || "" ).match( rnothtmlwhite ) || [ "" ];
		t = tipos.comprimento;
		enquanto ( t-- ) {
			tmp = rtypenamespace.exec(tipos[t]) || [];
			tipo = tipo de origem = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Desvincula todos os eventos (neste namespace, se fornecido) para o elemento
			if ( !tipo ) {
				for ( digite eventos ) {
					jQuery.event.remove(elem, tipo + tipos[ t ], manipulador, seletor, true );
				}
				continuar;
			}

			especial = jQuery.event.special[ tipo ] || {};
			type = ( seletor ? special.delegateType : special.bindType ) || tipo;
			manipuladores = eventos[ tipo ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove eventos correspondentes
			origCount = j = manipuladores.comprimento;
			while ( j-- ) {
				handleObj = manipuladores[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !seletor || seletor === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( especial.remove ) {
						special.remove.call(elem, handleObj);
					}
				}
			}

			// Remove o manipulador de eventos genérico se removemos algo e não existem mais manipuladores
			// (evita potencial para recursão sem fim durante a remoção de manipuladores de eventos especiais)
			if (origCount && !handlers.length) {
				if (!special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent(elem, type, elemData.handle);
				}

				excluir eventos[tipo];
			}
		}

		// Remove os dados e o expando se não for mais usado
		if (jQuery.isEmptyObject(eventos)) {
			dataPriv.remove( elem, "manipular eventos" );
		}
	},

	dispatch: function(nativeEvent) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array(argumentos.comprimento),

			// Cria um jQuery.Event gravável a partir do objeto de evento nativo
			evento = jQuery.event.fix(nativeEvent),

			manipuladores = (
				dataPriv.get( this, "eventos" ) || Object.create( null )
			)[ event.type ] || [],
			especial = jQuery.event.special[ event.type ] || {};

		// Use o jQuery.Event corrigido em vez do evento nativo (somente leitura)
		args[ 0 ] = evento;

		for ( i = 1; i < argumentos.comprimento; i++ ) {
			args[i] = argumentos[i];
		}

		event.delegateTarget = this;

		// Chame o gancho preDispatch para o tipo mapeado e deixe-o sair, se desejado
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			retornar;
		}

		// Determina os manipuladores
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Executa os delegados primeiro; eles podem querer parar a propagação abaixo de nós
		i = 0;
		while ( (matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Se o evento tiver namespace, cada manipulador só será invocado se for
				// especialmente universal ou seus namespaces são um superconjunto do evento.
				if (!event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply(matched.elem, args );

					if ( ret !== indefinido ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Chama o gancho postDispatch para o tipo mapeado
		if ( especial.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return evento.resultado;
	},

	manipuladores: função (evento, manipuladores) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegadoCount = manipuladores.delegateCount,
			cur = evento.destino;

		// Encontra manipuladores delegados
		if ( delegadoCount &&

			// Suporte: IE <=9
			// Árvores de instância SVG <use> de buraco negro (trac-13180)
			cur.nodeType &&

			// Suporte: Firefox <=42
			// Suprime cliques que violam especificações indicando um botão de ponteiro não primário (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Suporte: somente IE 11
			// ...mas não os "cliques" das teclas de seta das entradas de rádio, que podem ter `button` -1 (gh-2343)
			!( event.type === "clique" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Não verifica não-elementos (trac-13208)
				// Não processar cliques em elementos desabilitados (trac-6911, trac-8165, trac-11382, trac-11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegadoCount; i++ ) {
						handleObj = manipuladores[i];

						// Não entra em conflito com as propriedades Object.prototype (trac-13203)
						sel = handleObj.selector + " ";

						if (matchedSelectors[sel] === indefinido) {
							matchedSelectors[sel] = handleObj.needsContext ?
								jQuery(sel, this).index(cur) > -1:
								jQuery.find(sel, this, null, [ cur ] ).length;
						}
						if (matchedSelectors[sel]) {
							matchedHandlers.push( handleObj );
						}
					}
					if (matchedHandlers.length) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Adiciona os manipuladores restantes (ligados diretamente)
		cur = este;
		if ( delegadoCount < manipuladores.comprimento ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function(nome, gancho) {
		Object.defineProperty( jQuery.Event.prototype, nome, {
			enumerável: verdadeiro,
			configurável: verdadeiro,

			get: isFunction(gancho) ?
				função() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				função() {
					if ( this.originalEvent ) {
						return this.originalEvent[ nome ];
					}
				},

			definir: função( valor ) {
				Object.defineProperty( this, name, {
					enumerável: verdadeiro,
					configurável: verdadeiro,
					gravável: verdadeiro,
					valor: valor
				} );
			}
		} );
	},

	fix: function(originalEvent) {
		return originalEvent[ jQuery.expando ] ?
			evento original:
			novo jQuery.Event(originalEvent);
	},

	especial: {
		carregar: {

			// Evita que eventos image.load acionados borbulhem para window.load
			noBubble: true
		},
		clique: {

			// Utilize o evento nativo para garantir o estado correto para entradas verificáveis
			configuração: function( dados ) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma variável local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = this || dados;

				// Reivindica o primeiro manipulador
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada") ) {

					// dataPriv.set( el, "clique", ... )
					alavancagemNative(el, "clique", true );
				}

				// Retorna false para permitir o processamento normal no chamador
				retorna falso;
			},
			gatilho: function( dados ) {

				// Para compressibilidade mútua com _default, substitua o acesso `this` por uma variável local.
				// `|| data` é um código morto destinado apenas a preservar a variável por meio da minificação.
				var el = this || dados;

				// Força a configuração antes de disparar um clique
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "entrada") ) {

					alavancagemNative(el, "clique");
				}

				// Retorna não falso para permitir a propagação normal do caminho do evento
				retornar verdadeiro;
			},

			// Para consistência entre navegadores, suprima .click() nativo nos links
			// Também evita isso se estivermos dentro de uma pilha de evento nativo alavancado
			_padrão: função( evento ) {
				var destino = evento.destino;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get(alvo, "clique" ) ||
					node(destino, "a");
			}
		},

		antes de descarregar: {
			postDispatch: function(evento) {

				// Suporte: Firefox 20+
				// O Firefox não alerta se o campo returnValue não estiver definido.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Assegure a presença de um ouvinte de evento que lida com eventos acionados manualmente
// eventos sintéticos interrompendo o progresso até serem invocados novamente em resposta a
// Eventos *nativos* que disparam diretamente, garantindo que as mudanças de estado tenham
// já ocorreu antes de outros ouvintes serem invocados.
função alavancagemNative( el, tipo, isSetup ) {

	// `isSetup` ausente indica uma chamada de gatilho, que deve forçar a configuração por meio de jQuery.event.add
	if (!isSetup) {
		if (dataPriv.get(el, type) === indefinido) {
			jQuery.event.add(el, tipo, returnTrue);
		}
		retornar;
	}

	// Registra o controlador como um manipulador universal especial para todos os namespaces de evento
	dataPriv.set(el, tipo, false);
	jQuery.event.add( el, tipo, {
		espaço de nomes: falso,
		manipulador: função (evento) {
			var resultado,
				salvo = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrompe o processamento do evento .trigger()ed sintético externo
				if (!salvo) {

					// Armazena argumentos para uso ao manipular o evento nativo interno
					// Sempre haverá pelo menos um argumento (um objeto de evento), então este array
					// não será confundido com um objeto de captura restante.
					salvo = slice.call(argumentos);
					dataPriv.set(este, tipo, salvo);

					// Aciona o evento nativo e captura seu resultado
					esse tipo ]();
					resultado = dataPriv.get( this, type );
					dataPriv.set( this, type, false );

					if ( salvo !== resultado ) {

						// Cancela o evento sintético externo
						event.stopImmediatePropagation();
						event.preventDefault();

						resultado de retorno;
					}

				// Se este for um evento sintético interno para um evento com um substituto borbulhante
				// (foco ou desfoque), assume que o substituto já se propagou do acionamento
				// o evento nativo e evitar que isso aconteça novamente aqui.
				// Isso tecnicamente leva a ordem errada para `.trigger()` (no qual o
				// substituto borbulhante se propaga *depois* da base não borbulhante), mas isso parece
				// menos ruim que a duplicação.
				} else if ( ( jQuery.event.special[ tipo ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// Se este for um evento nativo disparado acima, tudo está em ordem
			// Dispara um evento sintético interno com os argumentos originais
			} else if ( salvo ) {

				// ...e captura o resultado
				dataPriv.set( this, type, jQuery.event.trigger(
					salvo [ 0 ],
					fatia.salvo( 1 ),
					esse
				) );

				// Aborta o tratamento do evento nativo por todos os manipuladores jQuery enquanto permite
				// manipuladores nativos no mesmo elemento para executar. No alvo, isso é alcançado
				// parando a propagação imediata apenas no evento jQuery. No entanto,
				// o evento nativo é reempacotado por um jQuery em cada nível do
				// propagação então a única maneira de pará-lo para jQuery é pará-lo para
				// todos via `stopPropagation()` nativo. Isso não é um problema para
				// foco/desfoque que não borbulha, mas também para de clicar nas caixas de seleção
				// e rádios. Aceitamos esta limitação.
				event.stopPropagation();
				event.isImmediatePropagationStopped = returnTrue;
			}
		}
	} );
}

jQuery.removeEvent = function(elem, type, handle) {

	// Este "if" é necessário para objetos simples
	if (elem.removeEventListener) {
		elem.removeEventListener(tipo, identificador);
	}
};

jQuery.Event = function( src, props ) {

	// Permitir instanciação sem a palavra-chave 'new'
	if ( !( esta instância de jQuery.Event ) ) {
		retornar novo jQuery.Event( src, props );
	}

	// Objeto de evento
	if ( src && src.type ) {
		this.originalEvent = origem;
		this.type = src.type;

		// Eventos borbulhando no documento podem ter sido marcados como evitados
		// por um manipulador mais abaixo na árvore; refletir o valor correto.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === indefinido &&

				// Suporte: Android <=2.3 somente
				src.returnValue === false ?
			returnVerdadeiro:
			retorna falso;

		// Cria propriedades de destino
		// Suporte: Safari <=6 - 7 somente
		// O destino não deve ser um nó de texto (trac-504, trac-13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Tipo de evento
	} outro {
		this.type = src;
	}

	// Coloca propriedades fornecidas explicitamente no objeto de evento
	if (adereços) {
		jQuery.extend( this, props );
	}

	// Cria um carimbo de data/hora se o evento recebido não tiver um
	this.timeStamp = src && src.timeStamp || Data.agora();

	// Marca como fixo
	this[ jQuery.expandindo ] = true;
};

// jQuery.Event é baseado em DOM3 Events conforme especificado pela ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	construtor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulado: falso,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Inclui todos os props de eventos comuns, incluindo props específicos KeyEvent e MouseEvent
jQuery.each( {
	altKey: verdadeiro,
	bolhas: verdade,
	cancelável: verdadeiro,
	toques alterados: verdadeiro,
	ctrlKey: verdadeiro,
	detalhe: verdade,
	Fase do evento: verdadeiro,
	metaKey: verdadeiro,
	páginaX: verdadeiro,
	páginaY: verdadeiro,
	shiftKey: verdadeiro,
	visão: verdadeiro,
	"char": verdadeiro,
	código: verdadeiro,
	charCode: verdadeiro,
	chave: verdadeiro,
	keyCode: verdadeiro,
	botão: verdadeiro,
	botões: verdadeiro,
	clienteX: verdadeiro,
	clienteY: verdadeiro,
	offsetX: verdadeiro,
	offsetY: verdadeiro,
	ponteiroId: verdadeiro,
	tipo de ponteiro: verdadeiro,
	telaX: verdadeiro,
	telaY: verdadeiro,
	targetTouches: verdadeiro,
	toElement: verdadeiro,
	toques: verdadeiro,
	qual: verdadeiro
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {

	function focusMappedHandler(nativeEvent) {
		if (document.documentMode) {

			// Suporte: IE 11+
			// Anexa um único manipulador de foco/foco no documento enquanto alguém deseja
			// foco/desfoque. Isso ocorre porque os primeiros são síncronos no IE, enquanto os últimos
			// são assíncronos. Em outros navegadores, todos esses manipuladores são invocados de forma síncrona.

			// `handle` de dados privados já envolveria o evento, mas precisamos
			// para alterar o `type` aqui.
			var handle = dataPriv.get( this, "handle" ),
				evento = jQuery.event.fix(nativeEvent);
			event.type = nativeEvent.type === "focusin" ? "foco" : "desfoque";
			event.isSimulated = true;

			// Primeiro, manuseie o foco/foco fora
			handle(nativeEvent);

			// ...então, manuseie o foco/desfoque
			//
			// foco/desfoque não borbulha enquanto foco dentro/foco fora sim; simular o primeiro por apenas
			// invocando o manipulador no nível inferior.
			if ( event.target === event.currentTarget ) {

				// A parte de configuração chama `leverageNative`, que, por sua vez, chama
				// `jQuery.event.add`, então o identificador de evento já terá sido definido
				// neste ponto.
				handle(evento);
			}
		} outro {

			// Para navegadores não-IE, anexe um único manipulador de captura no documento
			// enquanto alguém quer focar/sair do foco.
			jQuery.event.simulate( delegadoType, nativeEvent.target,
				jQuery.event.fix(nativeEvent));
		}
	}

	jQuery.event.special[ tipo ] = {

		// Utilize o evento nativo, se possível, para que a sequência de desfoque/foco esteja correta
		configuração: function() {

			var anexa;

			// Reivindica o primeiro manipulador
			// dataPriv.set( this, "foco", ... )
			// dataPriv.set( this, "blur", ... )
			alavancagemNative( this, type, true );

			if (document.documentMode) {

				// Suporte: IE 9 - 11+
				// Usamos o mesmo manipulador nativo para foco e foco (e foco e desfoque)
				// então precisamos coordenar as partes de configuração e desmontagem entre esses eventos.
				// Use `delegateType` como a chave, pois `type` já é usado por `leverageNative`.
				attaches = dataPriv.get( this, delegateType );
				if (!anexe) {
					this.addEventListener( delegateType, focusMappedHandler );
				}
				dataPriv.set( this, delegateType, ( attaches || 0 ) + 1 );
			} outro {

				// Retorna false para permitir o processamento normal no chamador
				retorna falso;
			}
		},
		gatilho: function() {

			// Força a configuração antes do gatilho
			alavancagemNative( this, type );

			// Retorna não falso para permitir a propagação normal do caminho do evento
			retornar verdadeiro;
		},

		desmontagem: function () {
			var anexa;

			if (document.documentMode) {
				anexa = dataPriv.get( this, delegateType ) - 1;
				if (!anexe) {
					this.removeEventListener( delegateType, focusMappedHandler );
					dataPriv.remove( this, delegateType );
				} outro {
					dataPriv.set( this, delegateType, attaches );
				}
			} outro {

				// Retorna false para indicar que a desmontagem padrão deve ser aplicada
				retorna falso;
			}
		},

		// Suprime foco nativo ou desfoque se estivermos dentro
		// uma pilha de evento nativo alavancada
		_padrão: função( evento ) {
			return dataPriv.get( event.target, type );
		},

		delegadoTipo: delegadoTipo
	};

	// Suporte: Firefox <=44
	// Firefox não tem eventos focus(in | out)
	// Ingresso relacionado - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Suporte: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// eventos de foco (entrada | saída) disparam após os eventos de foco e desfoque,
	// que é violação de especificação - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Ticket relacionado - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	//
	// Suporte: IE 9 - 11+
	// Para preservar a ordem relativa do evento de foco/foco e foco/desfoque garantida na ramificação 3.x,
	// anexa um único manipulador para ambos os eventos no IE.
	jQuery.event.special[ delegadoType ] = {
		configuração: function() {

			// Handle: nós regulares (através de `this.ownerDocument`), janela
			// (via `this.document`) & document (via `this`).
			var doc = this.ownerDocument || este.documento || esse,
				dataHolder = document.documentMode ? isto: doc,
				anexa = dataPriv.get( dataHolder, delegateType );

			// Suporte: IE 9 - 11+
			// Usamos o mesmo manipulador nativo para foco e foco (e foco e desfoque)
			// então precisamos coordenar as partes de configuração e desmontagem entre esses eventos.
			// Use `delegateType` como a chave, pois `type` já é usado por `leverageNative`.
			if (!anexe) {
				if (document.documentMode) {
					this.addEventListener( delegateType, focusMappedHandler );
				} outro {
					doc.addEventListener( tipo, focusMappedHandler, true );
				}
			}
			dataPriv.set( dataHolder, delegateType, ( attaches || 0 ) + 1 );
		},
		desmontagem: function () {
			var doc = this.ownerDocument || este.documento || esse,
				dataHolder = document.documentMode ? isto: doc,
				anexa = dataPriv.get( dataHolder, delegateType ) - 1;

			if (!anexe) {
				if (document.documentMode) {
					this.removeEventListener( delegateType, focusMappedHandler );
				} outro {
					doc.removeEventListener( tipo, focusMappedHandler, true );
				}
				dataPriv.remove( dataHolder, delegateType );
			} outro {
				dataPriv.set( dataHolder, delegateType, attaches );
			}
		}
	};
} );

// Cria eventos mouseenter/leave usando mouseover/out e verificações de tempo de evento
// para que a delegação de eventos funcione em jQuery.
// Faça o mesmo para pointerenter/pointerleave e pointerover/pointerout
//
// Suporte: apenas Safari 7
// Safari envia mouseenter com muita frequência; ver:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// para a descrição do bug (existia também em versões mais antigas do Chrome).
jQuery.each( {
	mouseenter: "passar o mouse",
	mouseleave: "mouseout",
	ponteiroenter: "ponteiro",
	pointerleave: "pointerout"
}, function(origem, correção) {
	jQuery.event.special[ origem ] = {
		delegadoType: corrigir,
		tipo de ligação: corrigir,

		identificador: função (evento) {
			var ret,
				alvo = este,
				relacionado = evento.relacionadoTarget,
				handleObj = event.handleObj;

			// Para mouseenter/leave, chame o manipulador se relacionado estiver fora do destino.
			// NB: Não relatedTarget se o mouse saiu/entrou na janela do navegador
			if ( !relacionado || ( relacionado !== alvo && !jQuery.contains( alvo, relacionado ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( isto, argumentos );
				event.type = correção;
			}
			retorno ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function(tipos, seletor, dados, fn) {
		return on(este, tipos, seletor, dados, fn);
	},
	one: function(tipos, seletor, dados, fn) {
		return on( this, type, selector, data, fn, 1 );
	},
	off: function(tipos, seletor, fn) {
		var handleObj, tipo;
		if ( tipos && tipos.preventDefault && tipos.handleObj ) {

			// (evento) enviado jQuery.Event
			handleObj = tipos.handleObj;
			jQuery(types.delegateTarget).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			devolva isto;
		}
		if (tipo de tipos === "objeto" ) {

			// (tipos-objeto [, seletor])
			for ( digite tipos ) {
				this.off(tipo, seletor, tipos[tipo]);
			}
			devolva isto;
		}
		if ( seletor === false || tipo de seletor === "função" ) {

			// ( tipos [, fn] )
			fn = seletor;
			seletor = indefinido;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove(este, tipos, fn, seletor);
		} );
	}
} );


var

	// Suporte: IE <=10 - 11, apenas Edge 12 - 13
	// No IE/Edge, usar grupos regex aqui causa lentidão severa.
	// Consulte https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<estilo|<link/i,

	// verificado="checked" ou verificado
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,

	rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;

// Preferir um tbody sobre sua tabela pai para conter novas linhas
função manipulaçãoAlvo(elem, conteúdo) {
	if ( nodeName(elem, "tabela") &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elemento;
	}

	elemento de retorno;
}

// Substituir/restaurar o atributo type dos elementos do script para manipulação segura do DOM
function disableScript(elem) {
	elem.type = ( elem.getAttribute( "type") !== null ) + "/" + elem.type;
	elemento de retorno;
}
function restoreScript(elem) {
	if ( (elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} outro {
		elem.removeAttribute("tipo");
	}

	elemento de retorno;
}

função cloneCopyEvent( origem, destino ) {
	var i, l, tipo, pdataOld, udataOld, udataCur, eventos;

	if ( dest.nodeType !== 1 ) {
		retornar;
	}

	// 1. Copie dados privados: eventos, manipuladores, etc.
	if (dataPriv.hasData(src)) {
		pdataOld = dataPriv.get( src );
		eventos = pdataOld.events;

		if ( eventos ) {
			dataPriv.remove( dest, "manipular eventos" );

			for ( digite eventos ) {
				for ( i = 0, l = eventos[ tipo ].comprimento; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copie os dados do usuário
	if (dataUser.hasData(src)) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set(dest, udataCur);
	}
}

// Corrige bugs do IE, veja testes de suporte
function fixInput( origem, destino ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Falha ao persistir o estado marcado de uma caixa de seleção ou botão de opção clonado.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Falha ao retornar a opção selecionada ao estado selecionado padrão ao clonar opções
	} else if ( nodeName === "entrada" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip(coleção, args, retorno de chamada, ignorado) {

	// Achata quaisquer arrays aninhados
	args = flat( args );

	fragmento var, primeiro, scripts, hasScripts, nó, doc,
		eu = 0,
		l = coleção.comprimento,
		iNoClone = l - 1,
		valor = args[ 0 ],
		valueIsFunction = isFunction( value );

	// Não podemos clonar fragmentos Node que contenham verificados, no WebKit
	if ( valueIsFunction ||
			( l > 1 && tipo de valor === "string" &&
				!support.checkClone && rchecked.test( valor ) ) ) {
		return coleção.each( função( índice ) {
			var self = coleção.eq( index );
			if ( valorIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip(self, args, retorno de chamada, ignorado);
		} );
	}

	se ( l ) {
		fragment = buildFragment( args, coleção[ 0 ].ownerDocument, false, coleção, ignorado );
		primeiro = fragmento.primeiroFilho;

		if ( fragment.childNodes.length === 1 ) {
			fragmento = primeiro;
		}

		// Requer um novo conteúdo ou um interesse em elementos ignorados para invocar o callback
		if ( primeiro || ignorado ) {
			scripts = jQuery.map( getAll(fragment, "script" ), disableScript );
			hasScripts = scripts.comprimento;

			// Usa o fragmento original para o último item
			// ao invés do primeiro porque pode acabar
			// sendo esvaziado incorretamente em determinadas situações (trac-8070).
			for ( ; i < l; i++ ) {
				nó = fragmento;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Manter referências a scripts clonados para posterior restauração
					if (hasScripts) {

						// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
						// push.apply(_, arraylike) lança no antigo WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call(coleção[ i ], nó, i );
			}

			if (hasScripts) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reativa os scripts
				jQuery.map( scripts, restoreScript );

				// Avalia scripts executáveis ​​na inserção do primeiro documento
				for ( i = 0; i < hasScripts; i++ ) {
					nó = scripts[i];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains(doc, node)) {

						if ( node.src && ( node.type || "" ).toLowerCase() !== "module" ) {

							// Dependência AJAX opcional, mas não executará scripts se não estiver presente
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, documento);
							}
						} outro {

							// Desembrulha uma seção CDATA contendo o conteúdo do script. isso não deveria ser
							// necessário como em documentos XML eles já não são visíveis quando
							// inspecionando o conteúdo dos elementos e em documentos HTML eles não têm
							// significado, mas estamos preservando essa lógica para compatibilidade com versões anteriores.
							// Isso será removido completamente na versão 4.0. Veja gh-4904.
							DOMEval( node.textContent.replace(rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	cobrança de devolução;
}

function remove(elem, selector, keepData) {
	nó var,
		nós = seletor ? jQuery.filter( seletor, elem ): elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if (!keepData && node.nodeType === 1) {
			jQuery.cleanData( getAll( nó ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	elemento de retorno;
}

jQuery.extend( {
	htmlPrefilter: function( html) {
		retornar html;
	},

	clone: ​​function(elem, dataAndEvents, deepDataAndEvents) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached(elem);

		// Corrige problemas de clonagem do IE
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// Evitamos jQuery#find aqui por motivos de desempenho:
			// https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll(elem);

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[i], destElements[i]);
			}
		}

		// Copia os eventos do original para o clone
		if (dadosEEventos) {
			if (deepDataAndEvents) {
				srcElements = srcElements || getAll(elem);
				destElements = destElements || getAll(clone);

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[i], destElements[i]);
				}
			} outro {
				cloneCopyEvent(elem, clone);
			}
		}

		// Preserva o histórico de avaliação do script
		destElements = getAll(clone, "script");
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Retorna o conjunto clonado
		retornar clone;
	},

	cleanData: function(elems) {
		var dados, elemento, tipo,
			especial = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== indefinido; i++ ) {
			if (aceitarDados(elem)) {
				if ((dados = elem[dadosPriv.expandindo])) {
					if ( data.eventos ) {
						for ( digite data.eventos ) {
							if (especial[tipo]) {
								jQuery.event.remove(elem, tipo);

							// Este é um atalho para evitar sobrecarga do jQuery.event.remove
							} outro {
								jQuery.removeEvent(elem, type, data.handle);
							}
						}
					}

					// Suporte: Chrome <=35 - 45+
					// Atribuir undefined ao invés de usar delete, ver Data#remove
					elem[ dataPriv.expando ] = indefinido;
				}
				if (elem[dataUser.expandindo]) {

					// Suporte: Chrome <=35 - 45+
					// Atribuir undefined ao invés de usar delete, ver Data#remove
					elem[ dataUser.expando ] = indefinido;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	desanexar: function(seletor) {
		return remove( this, selector, true );
	},

	remover: function(seletor) {
		return remove( this, selector );
	},

	texto: função( valor ) {
		return access( this, function( value ) {
			valor de retorno === indefinido?
				jQuery.text(este):
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = valor;
					}
				} );
		}, nulo, valor, argumentos.comprimento);
	},

	anexar: function () {
		return domManip( isto, argumentos, função(elem) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var alvo = alvo da manipulação( this, elem );
				target.appendChild(elem);
			}
		} );
	},

	anexar: function () {
		return domManip( isto, argumentos, função(elem) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var alvo = alvo da manipulação( this, elem );
				target.insertBefore(elem, target.firstChild);
			}
		} );
	},

	antes: função() {
		return domManip( isto, argumentos, função(elem) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore(elem, this);
			}
		} );
	},

	depois: function() {
		return domManip( isto, argumentos, função(elem) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	vazio: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != nulo; i++ ) {
			if (elem.nodeType === 1) {

				// Evita vazamentos de memoria
				jQuery.cleanData(getAll(elem, false));

				// Remova todos os nós restantes
				elem.textContent = "";
			}
		}

		devolva isto;
	},

	clone: ​​function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( valor ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				eu = 0,
				l = this.length;

			if ( valor === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// Veja se podemos pegar um atalho e usar apenas innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( valor ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				valor = jQuery.htmlPrefilter( valor );

				tentar {
					for ( ; i < l; i++ ) {
						elem = this[i] || {};

						// Remove nós de elementos e evita vazamentos de memória
						if (elem.nodeType === 1) {
							jQuery.cleanData(getAll(elem, false));
							elem.innerHTML = valor;
						}
					}

					elemento = 0;

				// Se usar innerHTML lançar uma exceção, use o método de fallback
				} pegar ( e ) {}
			}

			if (elem) {
				this.empty().append( valor );
			}
		}, nulo, valor, argumentos.comprimento);
	},

	substituaCom: function() {
		var ignorado = [];

		// Faça as alterações, substituindo cada elemento de contexto não ignorado pelo novo conteúdo
		return domManip( isto, argumentos, função(elem) {
			var pai = this.parentNode;

			if (jQuery.inArray(este, ignorado) < 0) {
				jQuery.cleanData( getAll( this ) );
				if (pai) {
					parent.replaceChild(elem, this);
				}
			}

		// Força a invocação do retorno de chamada
		}, ignorado);
	}
} );

jQuery.each( {
	appendTo: "acrescentar",
	prependTo: "anterior",
	inserirAntes: "antes",
	inserirDepois: "depois",
	replaceAll: "substituirCom"
}, função(nome, original) {
	jQuery.fn[ nome ] = função( seletor ) {
		var elementos,
			ret = [],
			inserir = jQuery(seletor),
			último = inserir.comprimento - 1,
			i = 0;

		for ( ; i <= último; i++ ) {
			elems = i === último? this : this.clone( true );
			jQuery(inserir[i])[original](elems);

			// Suporte: Android <=4.0 apenas, PhantomJS 1 apenas
			// .get() porque push.apply(_, arraylike) lança no antigo WebKit
			push.apply(ret, elems.get());
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[az%]+$", "i" );

var rcustomProp = /^--/;


var getStyles = function(elem) {

		// Suporte: IE <=11 somente, Firefox <=30 (trac-15098, trac-14150)
		// IE joga em elementos criados em pop-ups
		// Enquanto isso, o FF lança os elementos do quadro por meio de "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			ver = janela;
		}

		return view.getComputedStyle(elem);
	};

var swap = function(elem, opções, callback) {
	var ret, nome,
		antigo = {};

	// Lembre-se dos valores antigos e insira os novos
	for (nome nas opções) {
		antigo[ nome ] = elem.style[ nome ];
		elem.style[ nome ] = opções[ nome ];
	}

	ret = callback.call(elem);

	// Reverte os valores antigos
	for (nome nas opções) {
		elem.style[ nome ] = antigo [ nome ];
	}

	retorno ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( função() {

	// A execução dos testes pixelPosition e boxSizingReliable requer apenas um layout
	// então eles são executados ao mesmo tempo para salvar o segundo cálculo.
	function computaEstiloTests() {

		// Este é um singleton, precisamos executá-lo apenas uma vez
		if ( !div ) {
			retornar;
		}

		container.style.cssText = "posição:absoluto;esquerda:-11111px;largura:60px;" +
			"margem superior:1px;preenchimento:0;borda:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margem:auto;borda:1px;preenchimento:1px;" +
			"largura:60%;superior:1%";
		documentElement.appendChild( recipiente ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Suporte: Android 4.0 - 4.3 apenas, Firefox <=3 - 44
		confiávelMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;

		// Suporte: apenas Android 4.0 - 4.3, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Alguns estilos voltam com valores percentuais, mesmo que não devessem
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;

		// Suporte: IE 9 - 11 apenas
		// Detecta relatórios incorretos de dimensões de conteúdo para elementos box-sizing:border-box
		boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;

		// Suporte: somente IE 9
		// Detecta estouro: rolagem maluca (gh-3699)
		// Suporte: Chrome <=64
		// Não seja enganado quando o zoom afetar offsetWidth (gh-4029)
		div.style.position = "absoluto";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( recipiente );

		// Anula o div para que não seja armazenado na memória e
		// também será um sinal de que verificações já realizadas
		div = nulo;
	}

	function roundPixelMeasures(medida) {
		return Math.round(parseFloat(medida));
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		confiávelTrDimensionsVal, confiávelMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Termine cedo em ambientes limitados (sem navegador)
	if (!div.estilo) {
		retornar;
	}

	// Suporte: IE <=9 - 11 somente
	// O estilo do elemento clonado afeta o elemento de origem clonado (trac-8908)
	div.style.backgroundClip = "caixa de conteúdo";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "caixa de conteúdo";

	jQuery.extend( suporte, {
		boxSizingReliable: function() {
			computaEstiloTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computaEstiloTests();
			return pixelBoxStylesVal;
		},
		posição do pixel: function () {
			computaEstiloTests();
			return pixelPositionVal;
		},
		confiávelMargemEsquerda: function() {
			computaEstiloTests();
			retornar confiávelMarginLeftVal;
		},
		tamanho da caixa de rolagem: function() {
			computaEstiloTests();
			return scrollboxSizeVal;
		},

		// Suporte: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge relata erroneamente `getComputedStyle` das linhas da tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// O comportamento no IE 9 é mais sutil do que nas versões mais recentes e passa
		// algumas versões deste teste; certifique-se de não fazê-lo passar por aí!
		//
		// Suporte: Firefox 70+
		// Somente o Firefox inclui larguras de borda
		// em dimensões calculadas. (gh-4529)
		confiávelTrDimensions: function() {
			var tabela, tr, trCriança, trEstilo;
			if (confiávelTrDimensionsVal == nulo) {
				tabela = document.createElement( "tabela" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "borda:1px sólido";

				// Suporte: Chrome 86+
				// A altura definida por cssText não é aplicada.
				// Altura computada então retorna como 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Suporte: Android 8 Chrome 86+
				// Em nosso iframe bodyBackground.html,
				// a exibição de todos os elementos div é definida como "inline",
				// que causa problema apenas no Android 8 Chrome 86.
				// Garantindo que o div seja exibido: bloco
				// contorna esse problema.
				trChild.style.display = "bloquear";

				documentElement
					.appendChild( tabela )
					.appendFilho( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				confiávelTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) === tr.offsetHeight;

				documentElement.removeChild( tabela );
			}
			return confiávelTrDimensionsVal;
		}
	} );
} )();


função curCSS(elem, nome, calculado) {
	var largura, minWidth, maxWidth, ret,
		isCustomProp = rcustomProp.test( nome ),

		// Suporte: Firefox 51+
		// Recuperando o estilo antes de computado de alguma forma
		// corrige um problema com a obtenção de valores errados
		// em elementos desanexados
		estilo = estilo do elemento;

	calculado = calculado || getStyles(elem);

	// getPropertyValue é necessário para:
	// .css('filter') (somente IE 9, trac-12537)
	// .css('--customProperty) (gh-3144)
	if ( calculado ) {

		// Suporte: IE <=9 - 11+
		// IE suporta apenas `"float"` em `getPropertyValue`; em estilos computados
		// está disponível apenas como `"cssFloat"`. Não modificamos mais as propriedades
		// enviado para `.css()` além de camelCasing, então precisamos verificar ambos.
		// Normalmente, isso criaria uma diferença de comportamento: if
		// `getPropertyValue` retorna uma string vazia, o valor retornado
		// por `.css()` seria `undefined`. Este é geralmente o caso para
		// elementos desconectados. Porém, no IE mesmo elementos desconectados
		// sem estilos retorna `"none"` para `getPropertyValue( "float" )`
		ret = computered.getPropertyValue( nome ) || computado[nome];

		if ( isCustomProp && ret ) {

			// Suporte: Firefox 105+, Chrome <=105+
			// A especificação requer o corte de espaço em branco para propriedades personalizadas (gh-4926).
			// O Firefox apenas apara os espaços em branco à esquerda. Chrome simplesmente colapsa
			// espaço em branco inicial e final para um único espaço.
			//
			// Volta para `indefinido` se uma string vazia for retornada.
			// Isso recolhe uma definição ausente com a propriedade definida
			// e definido como uma string vazia, mas não há API padrão
			// nos permitindo diferenciá-los sem penalizar o desempenho
			// e retornando `undefined` se alinha com jQuery mais antigo.
			//
			// rtrimCSS trata U+000D CARRIAGE RETURN e U+000C FORM FEED
			// como espaço em branco enquanto CSS não, mas isso não é um problema
			// porque o pré-processamento CSS os substitui por U+000A LINE FEED
			// (que *é* espaço em branco CSS)
			// https://www.w3.org/TR/css-syntax-3/#input-preprocessing
			ret = ret.replace(rtrimCSS, "$1" ) || indefinido;
		}

		if ( ret === "" && ! isAttached( elem ) ) {
			ret = jQuery.style(elem, nome);
		}

		// Uma homenagem ao "incrível hack de Dean Edwards"
		// Navegador Android retorna porcentagem para alguns valores,
		// mas a largura parece ser confiável em pixels.
		// Isso é contra a especificação de rascunho do CSSOM:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( nome ) ) {

			// Lembra dos valores originais
			largura = estilo.largura;
			minWidth = estilo.minWidth;
			maxWidth = estilo.maxWidth;

			// Coloque os novos valores para obter um valor calculado
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computado.largura;

			// Reverte os valores alterados
			estilo.largura = largura;
			estilo.minWidth = minWidth;
			estilo.maxWidth = maxWidth;
		}
	}

	return ret !== indefinido ?

		// Suporte: IE <=9 - 11 somente
		// IE retorna o valor zIndex como um inteiro.
		ret + "" :
		ret;
}


função addGetHookIf( condiçãoFn, ganchoFn ) {

	// Defina o gancho, verificaremos na primeira execução se é realmente necessário.
	retornar {
		obter: function () {
			if (condiçãoFn()) {

				// Gancho não é necessário (ou não é possível usá-lo devido
				// para a dependência ausente), remova-a.
				exclua isso.get;
				retornar;
			}

			// Gancho necessário; redefina-o para que o teste de suporte não seja executado novamente.
			return ( this.get = hookFn ).apply( this, argumentos );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	estilovazio = document.createElement( "div" ).estilo,
	fornecedorProps = {};

// Retorna uma propriedade prefixada pelo fornecedor ou indefinida
function vendorPropName( nome ) {

	// Verifica os nomes prefixados do fornecedor
	var capName = nome[ 0 ].toUpperCase() + nome.slice( 1 ),
		i = cssPrefixes.length;

	enquanto eu-- ) {
		nome = cssPrefixes[ i ] + capName;
		if (nome em estilovazio) {
			nome de retorno;
		}
	}
}

// Retorna um jQuery.cssProps potencialmente mapeado ou propriedade prefixada do fornecedor
function finalPropName(nome) {
	var final = jQuery.cssProps[ nome ] || vendedorProps[nome];

	se ( final ) {
		retorno final;
	}
	if (nome em estilovazio) {
		nome de retorno;
	}
	return vendorProps[ nome ] = vendorPropName( nome ) || nome;
}


var

	// Trocável se display for nenhum ou começar com tabela
	// exceto "table", "table-cell" ou "table-caption"
	// Veja aqui os valores de exibição: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(nenhum|tabela(?!-c[ea]).+)/,
	cssShow = { posição: "absoluto", visibilidade: "oculto", exibição: "bloco" },
	cssNormalTransform = {
		Espaçamento entre letras: "0",
		peso da fonte: "400"
	};

função setPositiveNumber(_elem, valor, subtrair) {

	// Quaisquer valores relativos (+/-) já foram
	// normalizado neste ponto
	var correspondências = rcssNum.exec( valor );
	retornar partidas?

		// Protege contra "subtrair" indefinido, por exemplo, quando usado como em cssHooks
		Math.max( 0, correspondências[ 2 ] - ( subtrair || 0 ) ) + ( correspondências[ 3 ] || "px" ):
		valor;
}

function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
	var i = dimensão === "largura" ? 1: 0,
		adicionais = 0,
		delta = 0,
		margemDelta = 0;

	// Ajuste pode não ser necessário
	if (caixa === ( isBorderBox ? "borda": "conteúdo")) {
		retornar 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Ambos os modelos de caixa excluem margem
		// Contar o delta da margem separadamente para adicioná-lo apenas após o ajuste da medianiz de rolagem.
		// Isso é necessário para fazer margens negativas funcionarem com `outerHeight( true )` (gh-3982).
		if (caixa === "margem" ) {
			marginDelta += jQuery.css(elem, box + cssExpand[i], true, estilos);
		}

		// Se chegarmos aqui com uma caixa de conteúdo, estamos procurando "padding" ou "border" ou "margin"
		if (! isBorderBox) {

			// Adicionar preenchimento
			delta += jQuery.css( elem, "preenchimento" + cssExpand[ i ], verdadeiro, estilos );

			// Para "borda" ou "margem", adicione borda
			if ( caixa !== "preenchimento" ) {
				delta += jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", verdadeiro, estilos );

			// Mas ainda rastreá-lo de outra forma
			} outro {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", verdadeiro, estilos );
			}

		// Se chegarmos aqui com uma caixa de borda (conteúdo + preenchimento + borda), estamos procurando "conteúdo" ou
		// "preenchimento" ou "margem"
		} outro {

			// Para "conteúdo", subtraia o preenchimento
			if (caixa === "conteúdo" ) {
				delta -= jQuery.css( elem, "preenchimento" + cssExpand[ i ], verdadeiro, estilos );
			}

			// Para "conteúdo" ou "preenchimento", subtrair borda
			if (caixa!== "margem") {
				delta -= jQuery.css( elem, "borda" + cssExpand[ i ] + "Largura", verdadeiro, estilos );
			}
		}
	}

	// Leva em consideração a medianiz de rolagem da caixa de conteúdo positiva quando solicitado fornecendo um valor computado
	if (!isBorderBox && computeredVal >= 0) {

		// offsetWidth/offsetHeight é uma soma arredondada de conteúdo, padding, medianiz de rolagem e borda
		// Assumindo a calha de rolagem inteira, subtraia o restante e arredonde para baixo
		delta += Math.max( 0, Math.ceil(
			elem[ "deslocamento" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 ) ] -
			valor calculado -
			delta -
			extras -
			0,5

		// Se offsetWidth/offsetHeight for desconhecido, não podemos determinar a calha de rolagem da caixa de conteúdo
		// Use um zero explícito para evitar NaN (gh-3964)
		) ) || 0;
	}

	return delta + margemDelta;
}

function getWidthOrHeight(elem, dimension, extra) {

	// Inicia com estilo computado
	var estilos = getEstilos(elem),

		// Para evitar forçar um reflow, apenas busca boxSizing se precisarmos (gh-4322).
		// Caixa de conteúdo falsa até sabermos que é necessário saber o valor verdadeiro.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css(elem, "boxSizing", false, styles) === "border-box",
		valorIsBorderBox = isBorderBox,

		val = curCSS(elem, dimensão, estilos),
		offsetProp = "offset" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 );

	// Suporte: Firefox <=54
	// Retorna um valor não pixel confuso ou finge ignorância, conforme apropriado.
	if (rnumnonpx.test(val)){
		if ( ! extra ) {
			valor de retorno;
		}
		val = "auto";
	}


	// Suporte: IE 9 - 11 apenas
	// Use offsetWidth/offsetHeight para quando o tamanho da caixa não for confiável.
	// Nesses casos, pode-se confiar que o valor calculado seja border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Suporte: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge relata erroneamente `getComputedStyle` das linhas da tabela com largura/altura
		// definido em CSS enquanto as propriedades `offset*` relatam valores corretos.
		// Curiosamente, em alguns casos o IE 9 não sofre desse problema.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Volta para offsetWidth/offsetHeight quando o valor é "auto"
		// Isso acontece para elementos inline sem configuração explícita (gh-3571)
		val === "automático" ||

		// Suporte: Android <=4.1 - 4.3 apenas
		// Use também offsetWidth/offsetHeight para dimensões inline reportadas incorretamente (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Certifique-se de que o elemento está visível e conectado
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css(elem, "boxSizing", false, styles ) === "border-box";

		// Quando disponível, offsetWidth/offsetHeight aproxima as dimensões da caixa de borda.
		// Onde não estiver disponível (por exemplo, SVG), assuma um dimensionamento de caixa não confiável e interprete o
		// valor recuperado como uma dimensão de caixa de conteúdo.
		valueIsBorderBox = offsetProp em elem;
		if (valorIsBorderBox) {
			val = elem[offsetProp];
		}
	}

	// Normaliza "" e auto
	val = parseFloat(val) || 0;

	// Ajuste para o modelo de caixa do elemento
	retornar (valor +
		boxModelAdjustment(
			elem,
			dimensão,
			extra || ( isBorderBox ? "borda" : "conteúdo" ),
			valorIsBorderBox,
			estilos,

			// Fornece o tamanho computado atual para solicitar o cálculo da medianiz de rolagem (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Adicionar ganchos de propriedade de estilo para substituir o padrão
	// comportamento de obtenção e configuração de uma propriedade de estilo
	cssHooks: {
		opacidade: {
			get: function(elem, calculado) {
				if ( calculado ) {

					// Devemos sempre obter um número de volta da opacidade
					var ret = curCSS(elem, "opacidade" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Não adicione "px" automaticamente a essas propriedades possivelmente sem unidade
	cssNúmero: {
		animationIterationCount: verdadeiro,
		aspectRatio: verdadeiro,
		borderImageSlice: verdadeiro,
		colunaContagem: verdadeiro,
		flexGrow: verdadeiro,
		flexShrink: verdadeiro,
		peso da fonte: verdadeiro,
		gridArea: verdadeiro,
		gridColumn: verdadeiro,
		gridColumnEnd: verdadeiro,
		gridColumnStart: verdadeiro,
		gridRow: verdadeiro,
		gridRowEnd: verdadeiro,
		gridRowStart: verdadeiro,
		altura da linha: verdadeiro,
		opacidade: verdadeiro,
		ordem: verdadeiro,
		órfãos: verdade,
		escala: verdadeiro,
		viúvas: verdade,
		zÍndice: verdadeiro,
		zoom: verdadeiro,

		// relacionado a SVG
		fillOpacity: verdadeiro,
		floodOpacity: verdadeiro,
		stopOpacity: verdadeiro,
		cursoMiterlimit: verdadeiro,
		StrokeOpacity: verdadeiro
	},

	// Adicione as propriedades cujos nomes você deseja corrigir antes
	// definindo ou obtendo o valor
	cssProps: {},

	// Obtém e define a propriedade de estilo em um nó DOM
	estilo: função(elem, nome, valor, extra) {

		// Não defina estilos em nós de texto e comentários
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			retornar;
		}

		// Certifique-se de que estamos trabalhando com o nome correto
		var ret, tipo, ganchos,
			origName = camelCase(nome),
			isCustomProp = rcustomProp.test( nome ),
			estilo = estilo do elemento;

		// Certifique-se de que estamos trabalhando com o nome correto. nós não
		// deseja consultar o valor se for uma propriedade personalizada CSS
		// já que são definidos pelo usuário.
		if (! isCustomProp) {
			nome = finalPropName(origName);
		}

		// Obtém gancho para a versão com prefixo e, em seguida, para a versão sem prefixo
		ganchos = jQuery.cssHooks[ nome ] || jQuery.cssHooks[origName];

		// Verifica se estamos definindo um valor
		if ( valor !== indefinido ) {
			tipo = tipo de valor;

			// Converte "+=" ou "-=" para números relativos (trac-7345)
			if ( digite === "string" && ( ret = rcssNum.exec( valor ) ) && ret[ 1 ] ) {
				valor = ajusteCSS(elem, nome, ret);

				// Corrige bug trac-9237
				tipo = "número";
			}

			// Certifique-se de que os valores null e NaN não estejam definidos (trac-7116)
			if ( valor == nulo || valor !== valor ) {
				retornar;
			}

			// Se um número foi passado, adicione a unidade (exceto para certas propriedades CSS)
			// A verificação isCustomProp pode ser removida no jQuery 4.0 quando apenas anexamos automaticamente
			// "px" para alguns valores codificados.
			if ( digite === "número" && !isCustomProp ) {
				valor += ret && ret[ 3 ] || ( jQuery.cssNumber[origName] ? "" : "px" );
			}

			// props background-* afetam os valores do clone original
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				estilo[nome] = "herdar";
			}

			// Se um gancho foi fornecido, use esse valor, caso contrário, apenas defina o valor especificado
			if ( !hooks || !( "set" em hooks ) ||
				(valor = ganchos.set(elem, valor, extra))!== indefinido) {

				if (isCustomProp) {
					style.setProperty( nome, valor );
				} outro {
					estilo[nome] = valor;
				}
			}

		} outro {

			// Se um gancho foi fornecido obtém o valor não calculado de lá
			if ( ganchos && "pegar" em ganchos &&
				( ret = hooks.get(elem, false, extra ) ) !== indefinido ) {

				retorno ret;
			}

			// Caso contrário, apenas obtenha o valor do objeto de estilo
			estilo de retorno[nome];
		}
	},

	css: function(elem, nome, extra, estilos) {
		var val, num, ganchos,
			origName = camelCase(nome),
			isCustomProp = rcustomProp.test( nome );

		// Certifique-se de que estamos trabalhando com o nome correto. nós não
		// deseja modificar o valor se for uma propriedade personalizada CSS
		// já que são definidos pelo usuário.
		if (! isCustomProp) {
			nome = finalPropName(origName);
		}

		// Tente o nome prefixado seguido do nome não prefixado
		ganchos = jQuery.cssHooks[ nome ] || jQuery.cssHooks[origName];

		// Se um gancho foi fornecido obtém o valor calculado a partir dele
		if (ganchos && "obter" em ganchos) {
			val = hooks.get(elem, true, extra);
		}

		// Caso contrário, se existir uma maneira de obter o valor calculado, use-o
		if (val === indefinido) {
			val = curCSS(elem, nome, estilos);
		}

		// Converte "normal" para valor calculado
		if ( val === "normal" && nome em cssNormalTransform ) {
			val = cssNormalTransform[nome];
		}

		// Torne numérico se forçado ou um qualificador foi fornecido e val parece numérico
		if ( extra === "" || extra ) {
			num = parseFloat(val);
			retornar extra === verdadeiro || éFinito(num) ? num || 0 : valor;
		}

		valor de retorno;
	}
} );

jQuery.each( [ "altura", "largura" ], função( _i, dimensão ) {
	jQuery.cssHooks[ dimensão ] = {
		get: function(elem, computado, extra) {
			if ( calculado ) {

				// Certos elementos podem ter informações de dimensão se os mostrarmos de forma invisível
				// mas deve ter um estilo de exibição atual que se beneficie
				return rdisplayswap.test( jQuery.css(elem, "display") ) &&

					// Suporte: Safari 8+
					// As colunas da tabela no Safari têm offsetWidth e zero diferentes de zero
					// getBoundingClientRect().width a menos que a exibição seja alterada.
					// Suporte: IE <=11 somente
					// Executando getBoundingClientRect em um nó desconectado
					// no IE gera um erro.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap(elem, cssShow, function() {
						return getWidthOrHeight(elem, dimension, extra);
					} ):
					getWidthOrHeight(elem, dimension, extra);
			}
		},

		set: function(elem, value, extra) {
			correspondências var,
				estilos = getEstilos(elem),

				// Só lê styles.position se o teste tiver chance de falhar
				// para evitar forçar um refluxo.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					estilos.posição === "absoluto",

				// Para evitar forçar um reflow, apenas busca boxSizing se precisarmos (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css(elem, "boxSizing", false, styles) === "border-box",
				subtrair = extra ?
					boxModelAdjustment(
						elem,
						dimensão,
						extra,
						isBorderBox,
						estilos
					):
					0;

			// Leva em consideração as dimensões não confiáveis ​​da caixa de borda comparando o deslocamento* com o calculado e
			// simulando uma caixa de conteúdo para obter borda e preenchimento (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtrair -= Math.ceil(
					elem[ "deslocamento" + dimensão[ 0 ].toUpperCase() + dimensão.slice( 1 ) ] -
					parseFloat(estilos[dimensão]) -
					boxModelAdjustment(elem, dimension, "border", false, styles) -
					0,5
				);
			}

			// Converter para pixels se for necessário ajuste de valor
			if (subtrair && (correspondências = rcssNum.exec(valor)) &&
				( corresponde a[ 3 ] || "px" ) !== "px" ) {

				estilo do elemento[ dimensão ] = valor;
				valor = jQuery.css(elem, dimensão);
			}

			return setPositiveNumber(elem, value, subtract);
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function(elem, calculado) {
		if ( calculado ) {
			return (parseFloat(curCSS(elem, "marginLeft")) ||
				elem.getBoundingClientRect().left -
					swap(elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// Esses ganchos são usados ​​pelo animate para expandir as propriedades
jQuery.each( {
	margem: "",
	preenchimento: "",
	borda: "Largura"
}, função (prefixo, sufixo) {
	jQuery.cssHooks[prefixo + sufixo] = {
		expanda: function( valor ) {
			var i = 0,
				expandido = {},

				// Assume um único número se não for uma string
				partes = tipo de valor === "string" ? valor.split( " " ): [ valor ];

			for ( ; i < 4; i++ ) {
				expandido[prefixo + cssExpand[i] + sufixo] =
					partes[i] || partes[ i - 2 ] || partes[ 0 ];
			}

			retorno expandido;
		}
	};

	if (prefixo!== "margem") {
		jQuery.cssHooks[ prefixo + sufixo ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function(nome, valor) {
		return access( this, function( elem, name, value ) {
			estilos var, len,
				mapa = {},
				i = 0;

			if (Array.isArray(nome)) {
				estilos = getEstilos(elem);
				len = nome.comprimento;

				for ( ; i < len; i++ ) {
					map[ nome[i]] = jQuery.css(elem, nome[i], false, estilos);
				}

				mapa de retorno;
			}

			valor de retorno !== indefinido ?
				jQuery.style(elem, nome, valor):
				jQuery.css(elem, nome);
		}, nome, valor, argumentos.comprimento > 1);
	}
} );


function Tween(elem, options, prop, end, easing) {
	return new Tween.prototype.init(elem, options, prop, end, easing);
}
jQuery.Tween = Interpolação;

Tween.prototype = {
	construtor: Tween,
	init: function(elem, options, prop, end, easing, unit) {
		este.elem = elem;
		this.prop = prop;
		this.easing = atenuando || jQuery.easing._default;
		this.options = opções;
		this.start = this.now = this.cur();
		this.end = end;
		esta.unidade = unidade || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: função() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ):
			Tween.propHooks._default.get( this );
	},
	executar: função (porcentagem) {
		var aliviou,
			ganchos = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = facilitado = jQuery.easing[ this.easing ](
				porcentagem, esta.opções.duração * porcentagem, 0, 1, esta.opções.duração
			);
		} outro {
			this.pos = facilitado = por cento;
		}
		this.now = ( this.end - this.start ) * facilitado + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if (ganchos && ganchos.set) {
			ganchos.set( this );
		} outro {
			Tween.propHooks._default.set( this );
		}
		devolva isto;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_padrão: {
		obter: function( tween ) {
			var resultado;

			// Use uma propriedade no elemento diretamente quando não for um elemento DOM,
			// ou quando não houver nenhuma propriedade de estilo correspondente.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passar uma string vazia como um terceiro parâmetro para .css automaticamente
			// tenta um parseFloat e retorna para uma string se a análise falhar.
			// Valores simples como "10px" são analisados ​​para Float;
			// valores complexos como "rotate(1rad)" são retornados como estão.
			resultado = jQuery.css( tween.elem, tween.prop, "" );

			// Strings vazias, nulas, indefinidas e "auto" são convertidas para 0.
			retornar !resultado || resultado === "automático" ? 0 : resultado;
		},
		definir: function( tween ) {

			// Use o gancho de passo para compatibilidade com as costas.
			// Use cssHook se estiver lá.
			// Use .style se disponível e use propriedades simples quando disponíveis.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} outro {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Suporte: IE <=9 apenas
// Abordagem baseada em pânico para definir coisas em nós desconectados
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	definir: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		retornar p;
	},
	swing: function( p ) {
		return 0,5 - Math.cos( p * Math.PI ) / 2;
	},
	_padrão: "balanço"
};

jQuery.fx = Tween.prototype.init;

// Compatibilidade traseira <1.8 ponto de extensão
jQuery.fx.step = {};




var
	fxAgora, em andamento,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

função agenda() {
	if(emProgresso){
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( agenda );
		} outro {
			window.setTimeout( agendamento, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// As animações criadas de forma síncrona serão executadas de forma síncrona
função criarFxAgora() {
	window.setTimeout( function() {
		fxAgora = indefinido;
	} );
	return ( fxNow = Date.now() );
}

// Gera parâmetros para criar uma animação padrão
function genFx(tipo, includeWidth) {
	var que,
		eu = 0,
		attrs = { altura: tipo };

	// Se incluirmos largura, o valor do passo é 1 para fazer todos os valores cssExpand,
	// caso contrário, o valor do passo é 2 para pular para esquerda e direita
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		qual = cssExpand[i];
		attrs[ "margem" + qual ] = attrs[ "preenchimento" + qual ] = tipo;
	}

	if (incluirLargura) {
		attrs.opacity = attrs.width = tipo;
	}

	retornar atributos;
}

function createTween(valor, propriedade, animação) {
	var interpolação,
		coleção = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		índice = 0,
		comprimento = coleção.comprimento;
	for ( ; índice < comprimento; índice++ ) {
		if (( tween = coleção[ índice ].call(animação, propriedade, valor))) {

			// Terminamos com esta propriedade
			retorno entre;
		}
	}
}

function defaultPrefilter(elem, props, opts) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "largura" em props || "altura" em adereços,
		anim = isso,
		origem = {},
		estilo = estilo do elemento,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// As animações de pular fila sequestram os ganchos fx
	if (!opts.queue) {
		ganchos = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if (!hooks.unqueued) {
					fogovelho();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Certifique-se de que o manipulador completo seja chamado antes que isso seja concluído
			anim.always( function() {
				hooks.unqueued--;
				if (!jQuery.queue(elem, "fx").length) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detecta mostrar/ocultar animações
	for ( prop em props ) {
		valor = props[ prop ];
		if ( rfxtypes.test( valor ) ) {
			excluir props[ prop ];
			alternar = alternar || valor === "alternar";
			if (valor === (oculto? "ocultar": "mostrar")) {

				// Finja estar escondido se for um "show" e
				// ainda há dados de um mostrar/ocultar parado
				if ( valor === "mostrar" && dataShow && dataShow[ prop ] !== indefinido ) {
					oculto = verdadeiro;

				// Ignora todos os outros dados de mostrar/ocultar no-op
				} outro {
					continuar;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style(elem, prop);
		}
	}

	// Salte se este for um no-op como .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if (!propTween && jQuery.isEmptyObject(orig)) {
		retornar;
	}

	// Restringir os estilos "overflow" e "display" durante as animações da caixa
	if ( isBox && elem.nodeType === 1 ) {

		// Suporte: IE <=9 - 11, Edge 12 - 15
		// Registra todos os 3 atributos de estouro porque o IE não infere o atalho
		// de overflowX e overflowY de valores idênticos e Edge apenas espelha
		// o valor overflowX lá.
		opts.overflow = [estilo.overflow, estilo.overflowX, estilo.overflowY];

		// Identifique um tipo de exibição, preferindo mostrar/ocultar dados antigos sobre a cascata CSS
		restoreDisplay = dataShow && dataShow.display;
		if (restoreDisplay == null) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css(elem, "display");
		if (exibir === "nenhum" ) {
			if (restoreDisplay) {
				display = restoreDisplay;
			} outro {

				// Obtém valor(es) não vazio(s) forçando temporariamente a visibilidade
				showHide([elem], verdadeiro);
				restoreDisplay = elem.style.display || restaurarDisplay;
				display = jQuery.css(elem, "display");
				showHide([elem]);
			}
		}

		// Anima elementos inline como inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if (jQuery.css(elem, "float") === "nenhum" ) {

				// Restaura o valor de exibição original no final das animações puras de mostrar/ocultar
				if (!propTween) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if (restoreDisplay == null) {
						exibição = estilo.display;
						restoreDisplay = exibição === "nenhum" ? "" : mostrar;
					}
				}
				style.display = "bloco embutido";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "oculto";
		anim.always( function() {
			estilo.overflow = opts.overflow[ 0 ];
			estilo.overflowX = opções.overflow[ 1 ];
			estilo.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implementa mostrar/ocultar animações
	propTween = falso;
	for ( prop na origem ) {

		// Configuração geral de mostrar/ocultar para esta animação de elemento
		if (!propTween) {
			if (dataShow) {
				if ( "escondido" em dataShow ) {
					oculto = dataShow. oculto;
				}
			} outro {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Armazena escondido/visível para alternar então `.stop().toggle()` "inverte"
			if (alternar) {
				dataShow.hidden = !hidden;
			}

			// Mostrar elementos antes de animá-los
			se (escondido) {
				showHide([elem], verdadeiro);
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// A etapa final de uma animação "ocultar" é na verdade ocultar o elemento
				if ( !oculto ) {
					showHide([elem]);
				}
				dataPriv.remove(elem, "fxshow" );
				for ( prop na origem ) {
					jQuery.style(elem, prop, orig[ prop]);
				}
			} );
		}

		// Configuração por propriedade
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop em dataShow ) ) {
			dataShow[prop] = propTween.start;
			se (escondido) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing e expand cssHook pass
	for ( índice em props ) {
		nome = camelCase( index );
		easing = specialEasing[ nome ];
		valor = props[ índice ];
		if ( Array.isArray( valor ) ) {
			easing = valor[ 1 ];
			valor = props[ index ] = valor[ 0 ];
		}

		if ( índice !== nome ) {
			props[nome] = valor;
			excluir props[índice];
		}

		ganchos = jQuery.cssHooks[ nome ];
		if (ganchos && "expandir" em ganchos) {
			valor = hooks.expand( valor );
			excluir props[nome];

			// Não exatamente $.extend, isso não substituirá as chaves existentes.
			// Reutilizando 'index' porque temos o "nome" correto
			for ( índice em valor ) {
				if ( !( índice em props ) ) {
					props[índice] = valor[índice];
					specialEasing[ index ] = atenuação;
				}
			}
		} outro {
			specialEasing[ nome ] = atenuação;
		}
	}
}

função Animação(elem, propriedades, opções) {
	var resultado,
		parou,
		índice = 0,
		comprimento = Animation.prefilters.length,
		adiado = jQuery.Deferred().always( function() {

			// Não corresponde ao elemento no seletor :animated
			excluir tick.elem;
		} ),
		carrapato = função() {
			if ( parado ) {
				retorna falso;
			}
			var currentTime = fxNow || criarFxNow(),
				restante = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Suporte: apenas Android 2.3
				// O bug de travamento arcaico não nos permite usar `1 - ( 0.5 || 0 )` (trac-12497)
				temp = restante / animation.duration || 0,
				por cento = 1 - temp,
				índice = 0,
				comprimento = animation.tweens.length;

			for ( ; índice < comprimento; índice++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith(elem, [animação, porcentagem, restante]);

			// Se houver mais o que fazer, ceda
			if (porcentagem < 1 && comprimento) {
				retorno restante;
			}

			// Se esta foi uma animação vazia, sintetiza uma notificação de progresso final
			if ( !comprimento ) {
				deferred.notifyWith(elem, [animação, 1, 0]);
			}

			// Resolva a animação e relate sua conclusão
			deferred.resolveWith(elem, [animação]);
			retorna falso;
		},
		animação = deferred.promise( {
			elem: elem,
			adereços: jQuery.extend( {}, propriedades ),
			opções: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// Use proper attribute retrieval (trac-12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];
						if ( cur.indexOf( " " + className + " " ) < 0 ) {
							cur += className + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	removeClass: function( value ) {
		var classNames, cur, curValue, className, i, finalValue;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classNames = classesToArray( value );

		if ( classNames.length ) {
			return this.each( function() {
				curValue = getClass( this );

				// This expression is here for better compressibility (see addClass)
				cur = this.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					for ( i = 0; i < classNames.length; i++ ) {
						className = classNames[ i ];

						// Remove *all* instances
						while ( cur.indexOf( " " + className + " " ) > -1 ) {
							cur = cur.replace( " " + className + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						this.setAttribute( "class", finalValue );
					}
				}
			} );
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var classNames, className, i, self,
			type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		classNames = classesToArray( value );

		return this.each( function() {
			if ( isValidValue ) {

				// Toggle individual class names
				self = jQuery( this );

				for ( i = 0; i < classNames.length; i++ ) {
					className = classNames[ i ];

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (trac-14686, trac-14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (trac-2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (trac-9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (trac-9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (trac-6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// trac-7653, trac-8125, trac-8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (trac-10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes trac-9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (trac-10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket trac-12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (trac-15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// trac-9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (trac-11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// trac-1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see trac-8605, trac-14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// trac-14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
// Require that the "whitespace run" starts from a non-whitespace
// to avoid O(N^2) behavior when the engine would try matching "\s+$" at each space position.
var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "$1" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (trac-7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (trac-13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );