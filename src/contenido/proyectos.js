/* ============================================================================
   proyectos.js — SECCIÓN 4: PROYECTOS
   ----------------------------------------------------------------------------
   Esta sección es una LÍNEA DE TIEMPO del mandato: cada actividad es una caja
   que se puede pinchar para leer su detalle.

   Para editar una actividad, busca su línea más abajo y cambia lo que quieras.
   El diseño se reacomoda solo: no hay que tocar ningún otro archivo.
   ============================================================================ */

window.CONTENIDO_PROYECTOS = {

  fondo: {
    video: '',                      // 👉 VIDEO (opcional)
    imagen: '',                     // 👉 IMAGEN (opcional)
  },

  kicker: '// Proyectos',
  titulo: ['Nuestra gestión'],
  intro: 'En el marco de nuestro pilar Ejecutar, nosotros les presentamos ' +
         'nuestra propuesta de cómo será nuestra gestión si asumimos para ' +
         'liderar el próximo año el CAA, donde indicamos cuáles serán las ' +
         'actividades desarrolladas cada mes.',

  lineaTiempo: {

    /* ---- LOS MESES DEL EJE ----------------------------------------------
       El orden de esta lista es el orden del eje. Si agregas o quitas un
       mes, el resto se reacomoda solo.                                      */
    meses: [
      'Nov 26', 'Dic 26', 'Ene 27', 'Feb 27', 'Mar 27', 'Abr 27',
      'May 27', 'Jun 27', 'Jul 27', 'Ago 27', 'Sep 27', 'Oct 27',
    ],

    /* ---- LEYENDA DE COLORES --------------------------------------------- */
    leyenda: {
      propuesta:   'Nuestros proyectos',
      reforma:     'Nuestras Reformas',
      tradicional: 'Proyectos CAA',
    },

    /* Instrucción chica que va ARRIBA, junto a la leyenda de colores. */
    ayuda: 'Pincha cualquier actividad para ver su detalle.',

    /* Aviso que va ARRIBA, junto a la leyenda de colores. */
    nota: 'Las actividades con flecha (→) son permanentes: comienzan ese mes ' +
          'y se mantienen durante todo el año.',

    /* Aviso que va DEBAJO de la línea de tiempo. Déjalo en '' si no lo quieres. */
    notaFinal: 'Fechas estimadas por mes, sujetas a confirmación.',

    /* ======================================================================
       LAS ACTIVIDADES

       Campos de cada una:

       • nombre     : el texto de la caja.
       • tipo       : 'propuesta'   → ROJO         (proyectos nuevos nuestros)
                      'reforma'     → ROJO OSCURO (cambios a algo que ya existe)
                      'tradicional' → VERDE        (lo que el colegio ya hace)
       • desde      : mes en que ocurre o empieza. Tiene que estar escrito
                      IGUAL que en la lista "meses" de arriba.
       • hasta      : solo si dura varios meses. Dibuja una barra larga.
                      Si la actividad es de un solo mes, no escribas este campo.
       • permanente : true  → le pone la flecha (→). Empieza ese mes y sigue
                      todo el año. No lleva "hasta".
       • grupo      : para que dos actividades que son LO MISMO queden en la
                      misma fila aunque ocurran en meses distintos (por
                      ejemplo Wickso Liga y Wickso Playoffs). Escríbeles el
                      mismo texto en este campo, el que quieras: solo se usa
                      para emparejarlas, no se ve en la página.
       • detalle    : el texto que se lee al pinchar la caja. Puede ser una
                      frase entre comillas o varios párrafos entre corchetes:
                          detalle: ['Primer párrafo.', 'Segundo párrafo.'],
                      Mientras esté vacío, el cuadro muestra un aviso gris que
                      desaparece solo apenas escribas algo.

       👉 Para agregar una actividad: copia una línea { ... } completa y
          cámbiale los datos.
       👉 Para quitarla: borra su línea completa.
       ====================================================================== */
    actividades: [

      /* ---------- PROYECTOS DE CAMPAÑA Y REFORMAS (rojo) ------------------ */
      {
        tipo: 'propuesta',
        nombre: 'App CAA',
        desde: 'Nov 26', permanente: true,
        detalle:
          '*Toda la información del CAA en un solo lugar.* Esta propuesta nace ' +
          'para que no vuelvas a enterarte tarde de una actividad, torneo o ' +
          'cualquier otra iniciativa de tu interés. Desde la aplicación podrás ' +
          'revisar comunicados oficiales, calendario, proyectos, puntajes ' +
          'deportivos, como los de la Copa Wickso o la Liga CVD VMA, ' +
          'colaboradores (con acceso directo al QR para sus beneficios), ' +
          'contactos y tu propio perfil. Está disponible para estudiantes desde ' +
          '8° Básico hasta 4° Medio y *¡ya puedes descargarla en App Store o Play ' +
          'Store!*',
      },
      {
        tipo: 'propuesta',
        nombre: 'Imprime al Toque',
        desde: 'Nov 26', permanente: true,
        detalle:
          '¿Necesitas imprimir algo para el colegio y no tienes cómo hacerlo? Con ' +
          'este proyecto, esto deja de ser un problema. Gracias a la colaboración ' +
          'de Dimacofi, el CAA habilitará un *sistema de impresión gratuito* ' +
          'disponible *desde 5° Básico hasta 4° Medio*. Cada estudiante tendrá ' +
          '*20 páginas para usar por semestre*, que podrá retirar de manera ' +
          'simple usando un sistema basado en su RUT. Además, podrá comprar packs ' +
          'adicionales de páginas si lo necesita.',
      },
      {
        tipo: 'reforma',
        nombre: '¡Elige TU Plan Lector!',
        desde: 'Mar 27', permanente: true,
        detalle: [
            '¿Cuántas veces buscaste un resumen para saber de qué se trata el libro ' +
            'del Plan Lector? Probablemente, muchas. Simplemente, los libros no ' +
            'llamaban la atención y leer se volvía una lata.',

            'Por eso proponemos una reforma para cambiar esto radicalmente. Ahora, ' +
            '*cada uno de ustedes podrá elegir qué libro leer* en relación al ' +
            'contenido visto en clases y a tus propios intereses. Además, *se ' +
            'acabará la monótona prueba escrita en papel*, por presentaciones, ' +
            'debates o entre otras muchas opciones.',

            'La implementación de esta reforma partirá el próximo año para los ' +
            'alumnos de *1°EM y 2°EM*, y año a año se irá ampliando para abarcar a ' +
            'todo el colegio.',
        ],
      },
      {
        tipo: 'reforma',
        nombre: 'Comitivas Comités',
        desde: 'Mar 27', permanente: true,
        detalle:
          'Las comitivas del CAA tienen un gran potencial que hoy no se está ' +
          'aprovechando. Por eso, las reformaremos con una *nueva metodología, ' +
          'objetivos claros y plazos concretos*, para que sean un aporte real al ' +
          'colegio y sus ideas *se conviertan en acciones reales*.',
      },
      {
        tipo: 'reforma',
        nombre: 'ADN',
        desde: 'Mar 27', permanente: true,
        detalle: [
            '*Transforma tu hora de Consejo de Curso.*',

            '¿Sientes que la hora de Consejo de Curso podría aprovecharse mucho ' +
            'mejor? Con ADN, queremos transformar ese espacio en un momento ' +
            'dinámico, práctico y realmente útil. Desde 3° Básico hasta 4° Medio, ' +
            'este bloque será *liderado directamente por las directivas de curso* y ' +
            'por cualquier alumno que desee aportar. El objetivo es claro: aprender ' +
            'nuevos conocimientos, desarrollar habilidades prácticas y nutrir el ' +
            'crecimiento personal de cada uno. Dejaremos atrás las actividades ' +
            'monótonas: los contenidos y talleres serán exclusivamente *según los ' +
            'intereses de cada curso*. Además, el Centro de Alumnos (CAA) brindará ' +
            'todo el respaldo necesario en logística, material y gestión de ' +
            'espacios para hacer realidad sus ideas.',
        ],
      },
      {
        tipo: 'reforma',
        nombre: 'Paseos Culturales',
        desde: 'Mar 27', hasta: 'Oct 27',
        detalle:
          '¿Qué tal si los Paseos Culturales no fueran solo una vez al año? Los ' +
          'traemos de vuelta con un formato, para que se conviertan en una ' +
          '*experiencia mensual*. Ustedes mismos podrán *votar el destino de cada ' +
          'salida* a través de encuestas en Instagram o en la App CAA, abriendo ' +
          'el abanico a lugares históricos, artísticos y también espacios de ' +
          'cultura popular.',
      },
      {
        tipo: 'reforma',
        nombre: 'Wickso Liga',
        desde: 'Abr 27', hasta: 'May 27', grupo: 'wickso',
        detalle:
          'La Copa Wickso *se renueva para durar todo el año*. El primer semestre ' +
          'se jugará bajo formato de liga, donde todos los equipos se enfrentarán ' +
          'entre sí para definir al mejor del semestre. Además, cada equipo podrá ' +
          '*diseñar su propia polera* a través del CAA, dándole más identidad y ' +
          'sentido de pertenencia a la competencia. El campeón de esta etapa ' +
          'clasificará directo a la Gran Final de fin de año.',
      },
      {
        tipo: 'propuesta',
        nombre: '1° Noche Verde',
        desde: 'May 27', grupo: 'noche-verde',
        detalle:
          'Falta poco para el Interescolar, y buscamos impulsar la banda de ' +
          'Alberto con un nuevo espacio de motivación. Se organizará un ambiente ' +
          'de apoyo a nuestros atletas, donde habrá lugares de comida, un ' +
          'escenario con *música en vivo* y un *banderazo final* para potenciar ' +
          'con todo la barra de los días siguientes.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Más Allá de la Burbuja',
        desde: 'May 27',
        detalle:
          'A veces es fácil quedarse dentro de nuestra propia realidad sin ' +
          'conocer lo que viven otras personas. Con esta iniciativa, buscamos ' +
          'justamente abrir esta mirada. *Durante tres días*, estudiantes de 2° y ' +
          '3° Medio participarán en distintas experiencias de servicio, ' +
          'incluyendo trabajos de fábrica y actividades en contacto directo con ' +
          'otras comunidades. Más que una salida, queremos que sea una ' +
          'experiencia que ayude a *entender otras realidades, desarrollar ' +
          'empatía y poner talentos al servicio de los demás*, siguiendo los ' +
          'valores del Verbo Divino y el compromiso de ser verdaderos agentes de ' +
          'cambio.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Más que un Saludo',
        desde: 'Jun 27',
        detalle:
          'Convivimos todos los días con profesores, auxiliares y funcionarios, ' +
          'pero ¿cuánto sabemos realmente de ellos? “Más que un Saludo” busca ' +
          'generar un espacio para *conocernos fuera de la rutina* y compartir ' +
          'como comunidad. Habrá actividades deportivas como fútbol, básquetbol y ' +
          'vóleibol, junto con juegos y espacios culturales como cacho, ajedrez y ' +
          'Catán. La jornada terminará con una instancia de convivencia para ' +
          'seguir conversando y compartiendo, fortaleciendo el respeto, la ' +
          'cercanía y ese *sentido de pertenencia* que hace que todos seamos ' +
          'parte de la comunidad.',
      },
      {
        tipo: 'reforma',
        nombre: 'Wickso Playoffs',
        desde: 'Jul 27', hasta: 'Ago 27', grupo: 'wickso',
        detalle:
          'Terminó el formato liga, ¿y ahora qué? Llega la etapa más intensa: en ' +
          'el segundo semestre comienzan los playoffs, donde los equipos ' +
          'competirán en fase eliminatoria directa hasta definir al campeón del ' +
          'semestre. Este ganador se enfrentará al campeón del primer semestre en ' +
          'la *Gran Final*, coronando al campeón anual de la Wickso. Además, se ' +
          'incorporarán reconocimientos especiales como el *MVP del torneo*, ' +
          'sumando más motivación a esta nueva etapa.',
      },
      {
        tipo: 'propuesta',
        nombre: '2° Noche Verde',
        desde: 'Oct 27', grupo: 'noche-verde',
        detalle:
          'Luego de una primera experiencia, buscamos que la Noche Verde se ' +
          'mantenga como *una tradición previa a cada Interescolar*. ' +
          'Continuaremos impulsando la banda de Alberto y generando un espacio ' +
          'para que los estudiantes puedan compartir, con comida, música en vivo ' +
          'y un banderazo final que nos prepare para apoyar con todo a nuestros ' +
          'atletas en el Interescolar final.',
      },

      /* ---------- ACTIVIDADES DEL COLEGIO (verde) ------------------------ */
      {
        tipo: 'tradicional',
        nombre: 'Huella de Primavera ’26',
        desde: 'Nov 26', grupo: 'huella',
        detalle: [
            '*Segunda edición del 2026* de una de las fiestas más icónicas del ' +
            'Colegio, en que *alrededor de 2.000 estudiantes* de 7°EB, 8°EB y 1°EM ' +
            'de todo Santiago se reúnen en el patio central para bailar y disfrutar ' +
            'de la música. Lo recaudado ayuda a financiar otros proyectos del CAA.',

            'Esta edición fue organizada por el CAA anterior, pero por temas de ' +
            'tiempos *será el nuevo CAA quien la lleve a cabo*.',
        ],
      },
      {
        tipo: 'tradicional',
        nombre: '1° Cuenta Pública',
        desde: 'Mar 27', grupo: 'cuenta-publica',
        detalle:
          'Instancia en la que el CAA informa a la comunidad sobre los *ingresos ' +
          'y gastos realizados entre octubre y marzo*. Además, se responden las ' +
          'preguntas de los estudiantes, promoviendo la *transparencia y el buen ' +
          'uso de los recursos*.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Huella de Verano ’27',
        desde: 'Mar 27', grupo: 'huella',
        detalle:
          '*Primera edición del 2027* de una de las fiestas más icónicas del ' +
          'Colegio, en que *alrededor de 2.000 estudiantes* de 7°EB, 8°EB y 1°EM ' +
          'de todo Santiago se reúnen en el patio central para bailar y disfrutar ' +
          'de la música. Lo recaudado ayuda a financiar otros proyectos del CAA.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Partido Auxiliares v/s CAA',
        desde: 'Mar 27',
        detalle:
          'Tradicional encuentro de fútbol entre los *12 integrantes del CAA y 11 ' +
          'auxiliares del Colegio*, disputado en la cancha de pasto. Más que una ' +
          'competencia, busca generar un espacio de convivencia y *reconocer el ' +
          'importante trabajo que realizan los auxiliares* dentro de la comunidad ' +
          'escolar.',
      },
      {
        tipo: 'tradicional',
        nombre: 'La RED',
        desde: 'Abr 27', hasta: 'Oct 27',
        detalle:
          'Espacio de encuentro entre *distintos Centros de Alumnos de colegios ' +
          'de Santiago*. En estas reuniones se comparten ideas, experiencias y ' +
          'proyectos, además de conversar sobre temas comunes a la labor de cada ' +
          'equipo.',
      },
      {
        tipo: 'tradicional',
        nombre: 'S. M. G',
        desde: 'Abr 27',
        detalle:
          'Los *Social Meeting Games* son alianzas organizadas junto al VMA ' +
          'durante el primer semestre. En ellas, estudiantes de 3°EM y 4°EM ' +
          'compiten en distintas pruebas y van sumando puntos para sus alianzas, ' +
          'que buscan quedarse con el *premio final*.',
      },
      {
        tipo: 'tradicional',
        nombre: 'L Gante',
        desde: 'May 27',
        detalle:
          '*Sexta edición* de la gala dirigida a estudiantes de 3°EM y 4°EM. El ' +
          'CAA se encarga de organizar la instalación de *carritos de comida y ' +
          'una pista de baile*, creando un espacio de celebración para los ' +
          'estudiantes y sus parejas.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Interescolar Preparatorio',
        desde: 'May 27', grupo: 'interescolar',
        detalle:
          'Primera fase de *la competencia de atletismo más importante de Chile*, ' +
          'desarrollada durante el primer semestre. En ella, los atletas ponen a ' +
          'prueba el trabajo realizado durante su pretemporada y buscan ' +
          'posicionar al colegio de cara a la etapa final. Además, es una ' +
          'instancia en la que la barra acompaña al equipo con *banderazos y el ' +
          'retomado baile de presentación*.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Liga CVD VMA',
        desde: 'May 27', hasta: 'Ago 27',
        detalle:
          'Liga de fútbol organizada en conjunto con las alumnas del Villa María ' +
          'Academy, que cuenta con *tres años de trayectoria*. Durante tres ' +
          'meses, equipos de ambos colegios forman alianzas y compiten ' +
          'semanalmente en las canchas sintéticas del CVD. Al finalizar la ' +
          'temporada, se define un equipo ganador de cada colegio.',
      },
      {
        tipo: 'tradicional',
        nombre: '2° Cuenta Pública',
        desde: 'Jun 27', grupo: 'cuenta-publica',
        detalle:
          'Segunda instancia anual de *rendición de cuentas*, en la que el CAA ' +
          'presenta a la comunidad los *movimientos de dinero realizados entre ' +
          'marzo y junio* y responde las dudas de los estudiantes.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Perspectivas Cruzadas',
        desde: 'Jul 27',
        detalle:
          'Espacio organizado en conjunto por los Centros de Alumnos del CVD y ' +
          'del VMA. En él, alumnas de 1°EM y alumnos de 2°EM *conversan y ' +
          'comparten sus puntos de vista sobre temas relevantes para su edad*, ' +
          'como el consumo de alcohol y las relaciones entre hombres y mujeres.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Alcantarilla',
        desde: 'Ago 27',
        detalle:
          'Competencia musical en la que participan estudiantes y agrupaciones ' +
          'del Colegio. Los ganadores obtienen *un cupo para presentarse en el ' +
          'Alcántara*, uno de los principales eventos musicales del Colegio.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Mes de la Cultura',
        desde: 'Ago 27',
        detalle:
          'Antes conocido como Semana de la Cultura, es *un mes completo* ' +
          'dedicado a actividades y charlas culturales organizadas por el CAA. Su ' +
          'objetivo es acercar a los estudiantes a distintas disciplinas, no solo ' +
          'a través de charlas, sino también mediante *experiencias prácticas*, ' +
          'como la creación de murales y encuentros con figuras destacadas de la ' +
          'política, la arquitectura y el arte, entre otros.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Semana Verbita',
        desde: 'Sep 27',
        detalle:
          'Semana previa a Fiestas Patrias en la que *se suspenden las clases ' +
          'regulares* y los estudiantes se organizan por generaciones y letras en ' +
          'torno a una temática común. Durante la semana, las alianzas compiten ' +
          'en distintas actividades deportivas y culturales hasta definir a una ' +
          'ganadora.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Alcántara',
        desde: 'Sep 27',
        detalle:
          'Evento musical emblemático del Colegio, con *más de 40 años de ' +
          'historia*. Reúne a las agrupaciones musicales del CVD, incluyendo a ' +
          'los ganadores de Alcantarilla, junto a artistas invitados externos. El ' +
          'resultado es un concierto abierto a toda la comunidad estudiantil, con ' +
          'una asistencia aproximada de *3.000 personas*.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Semana de Campaña',
        desde: 'Sep 27',
        detalle:
          'Período en que se lleva a cabo *la elección del nuevo Centro de ' +
          'Alumnos*. Durante tres días, las distintas candidaturas presentan sus ' +
          'propuestas y su visión para el Colegio. Al finalizar la semana, los ' +
          'estudiantes de 8°EB a 4°EM *votan para elegir a sus nuevos ' +
          'representantes*.',
      },
      {
        tipo: 'tradicional',
        nombre: '3° Cuenta Pública',
        desde: 'Oct 27', grupo: 'cuenta-publica',
        detalle:
          'Tercera y última instancia anual de *rendición de cuentas*. En ella, ' +
          'el CAA informa sobre los *movimientos de dinero realizados entre junio ' +
          'y octubre* y responde las preguntas de los estudiantes.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Interescolar Final',
        desde: 'Oct 27', grupo: 'interescolar',
        detalle:
          'Segunda y última fase del Interescolar de Atletismo, en la que *se ' +
          'define al campeón del año*. Durante la competencia, la barra acompaña ' +
          'a los atletas con cánticos, banderas y otras actividades hasta el ' +
          'cierre de la temporada.',
      },
      {
        tipo: 'tradicional',
        nombre: 'Huella de Invierno ’27',
        desde: 'Oct 27', grupo: 'huella',
        detalle:
          '*Segunda edición del 2027* de una de las fiestas más icónicas del ' +
          'Colegio, en que *alrededor de 2.000 estudiantes* de 7°EB, 8°EB y 1°EM ' +
          'de todo Santiago se reúnen en el patio central para bailar y disfrutar ' +
          'de la música. Lo recaudado ayuda a financiar otros proyectos del CAA.',
      },
    ],

    /* ======================================================================
       TEXTOS ESCRITOS QUE TODAVÍA NO TIENEN LUGAR EN LA LÍNEA DE TIEMPO

       Estos dos proyectos ya tienen su texto redactado, pero no aparecían en
       la línea de tiempo original, así que falta decidir EN QUÉ MES van.

       👉 Para ponerlos en la página: corta el bloque { ... } que quieras,
          pégalo dentro de la lista "actividades" de arriba, y escríbele el
          mes en "desde" (y "hasta" o "permanente: true" si corresponde).
       ====================================================================== */
    pendientesDeUbicar: [
      {
        tipo: 'reforma',
        nombre: 'Reciclaje CVD',
        desde: '',   // 👉 FALTA EL MES
        detalle:
          'Queremos que reciclar sea parte de la vida diaria del Verbo. ' +
          'Para ello, instalaremos multicontenedores de reciclaje en puntos ' +
          'estratégicos del colegio, junto con una campaña de educación ' +
          'ambiental para toda la comunidad.',
      },
      {
        tipo: 'propuesta',
        nombre: 'Verbo por el Mundo',
        desde: '',   // 👉 FALTA EL MES
        detalle:
          'Verbo por el Mundo propone una experiencia misionera que ' +
          'permitirá a los estudiantes recorrer distintas comunidades de ' +
          'Chile, viviendo el servicio, la evangelización y el encuentro ' +
          'con otras realidades. Más que un viaje, busca fortalecer la fe, ' +
          'el compromiso con los demás y la identidad verbita, haciendo ' +
          'vida el lema “Salgan al Mundo”.',
      },
    ],
  },

  /* ---- LLAMADO A LA ACCIÓN AL FINAL DE LA SECCIÓN ------------------------
     Quitado: la sección termina en la línea de tiempo.

     Si algún día quieres volver a mostrar el recuadro del final, cambia el
     null de abajo por un bloque con este formato:

       cta: {
         texto: '¿Tienes una idea para la comunidad?',
         boton: { texto: 'Preséntala al CAA', url: '#contacto' },
       },                                                                     */
  cta: null,
};
