$(document).ready(function () {
            //Sample Json data
            var jsondata = [
                    {
                        "mun": "Los 84 ayuntamientos del Estado de Hidalgo.",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVI, XLVIII, UP",
                        "noaplica": "XIV, XLVII",
                        "Espec": "Artículo 70 fracciones I "
                    },
                    {
                        "mun": "Poder Ejecutivo del Gobierno del Estado de Hidalgo.",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVI, XLVII, XLVIII, UP",
                        "noaplica": "XLVII",
                        "Espec": "Artículo 70 fracciones I "
                    },
                    {
                        "mun": "Poder Legislativo del Estado Libre y Soberano de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLIV, XLV,UP",
                        "noaplica": "XV, XXXVIII, XL, XLVI, XLVII",
                        "Espec": "Artículo 71"
                    },
                    {
                        "mun": "Auditoria Superior del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVI, XLVIII-UP",
                        "noaplica": "XV, XXII, XLVII",
                        "Espec": ""
                    },
                    {
                        "mun": "Poder Judicial del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVIII-UP",
                        "noaplica": "XV, XXII, XXXVII, XXXVIII, XLVI, XLVII",
                        "Espec": "Artículo 72"
                    },
                    {
                        "mun": "Instituto Estatal Electoral",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVIII, UP",
                        "noaplica": "XV, XXII, XXXVIII, XLVI, XLVII",
                        "Espec": "Artículo 73"
                    },
                    {
                        "mun": "Comisión de Derechos Humanos del Estado de Hidalgo.",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXVIII, XXXIX, XL, XLI, XLII, XLIII, XLV, XLVI, XLVII, XLVIII, UP",
                        "noaplica": "XV, XXII, XLIV, XLVII",
                        "Espec": "Artículo 73 fracción II"
                    },
                    {
                        "mun": "Instituto de Transparencia, Acceso a la Información Pública Gubernamental y Protección de Datos Personales del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XVI, XVII, XVIII, XIX, XX, XXI,XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII,  XXXIX,  XLI,  XLIII, XLIV, XLV, XLVI, XLVIII, UP",
                        "noaplica": "XV, XXXVIII, XL, XLII, XLVII ",
                        "Espec": "Artículo 73 fracciones III"
                    },
                    {
                        "mun": "Tribunal Electoral del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XIV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXIX,  XLI, XLVII, XLV, XLVIII,UP",
                        "noaplica": "XV, XXXVII, XXXVIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículo 73 fracciones IV"
                    },
                    {
                        "mun": "Universidad Autónoma del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XIII, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIV, XXXV, XXXVI, XXXIX, XL, XLII, XLIII, XLIV, XLV, XLVIII, UP",
                        "noaplica": "XII, XIV, XV, XXII, formato b de la fracción XXIII, XXVII, XXXIII, XXXVII, XXXVIII, XLI, XLVI, XLVII",
                        "Espec": "Artículo 74"
                    },
                    {
                        "mun": "Partido Acción Nacional",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Partido Revolucionario Institucional",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Partido de la Revolución Democrática",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Partido Verde Ecologista de México",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Partido del Trabajo",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Movimiento Ciudadano",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Nueva Alianza Hidalgo",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Partido Morena",
                        "aplica": "I, II, III, IV, V, VI, IX, XI, XIII, XVI, XVII, XIX, XX, XXIII, XXIV, XXV, XXVII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI ,XXXVII, XXXIX, XLI, XLII, XLIII, XLV, XLVI, XLVIII, UP",
                        "noaplica": "VII, VIII, X, XII, XIV, XV, XVIII, XXI, XXII, XXVI, XXVIII, XXXVIII, XL, XLIV, XLVII",
                        "Espec": "Artículo 75"
                    },
                    {
                        "mun": "Centro de Rehabilitación e Inclusión Infantil Teletón Hidalgo (CRIT Hidalgo), Fundación Teletón México, A.C",
                        "aplica": "I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII, XIII, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXIX, XXX, XXXI, XXXII, XXXIII, XXXIV, XXXV, XXXVI, XXXVIII, XXXIX, XL, XLI, XLII, XLIII, XLIV, XLV, XLVI, XLVIII, UP",
                        "noaplica": "XIV, XXII, XXXVII, XLVII",
                        "Espec": ""
                    },
                    {
                        "mun": "Sindicato Único de los Trabajadores al servicio del Poder Legislativo del Estado de Hidalgo",
                        "aplica": "I, II, III, VII, IX, XIII, XIX, XX, XXI, XXIII, XXIV, XXVII, XXIX, XXX, XXXIII, XXXIV, XXXVIII, XXXIX, XLI, XLIII, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXV, XXXVI, XXXVII, XL, XLII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Poder Ejecutivo del Estado de Hidalgo. de Hidalgo",
                        "aplica": "I, II, III, VII, XIII, XIX, XX, XXVII, XXIX, XXX, XXXIV, XXXVIII, XXXIX, XLV, XLII, XLIII, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XL, XLI, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Poder Judicial del Estado de Hidalgo.",
                        "aplica": "I, II, III, VII, IX, X, XIII, XVII, XIX, XX, XXIII, XXIV, XXIX, XXXIV, XXXV, XXXVI, XXXVIII, XXXIX, XLI, XLIII, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, VIII, XI, XII, XIV, XV, XVI, XVIII, XXI, XXII, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXVII, XL, XLII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio de la Comisión de Aguas y Alcantarillado de Sistemas Intermunicipales del Estado de Hidalgo",
                        "aplica": "I, II, III, IV, VI, VII, IX, X, XIII, XVI, XIX, XX, XXI, XXIII, XXIV, XXV, XXVI, XXVII, XXIX, XXX, XXXIII, XXXIV, XXXVI, XXXVIII, XXXIX, XLI, XLIII, XLV, XLVI, XLVIII,UP",
                        "noaplica": "V, VIII,IX, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIII,XXIV, XXVII, XXVIII, XXX, XXXI, XXXII, XXXV, XXXVII, XL, XLI, XLII, XLIV, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato del Personal Académico de la Universidad Autónoma del Estado de Hidalgo",
                        "aplica": "I, II, III, XIII, XXIX, XXXIV, XXXIX, XLIII, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLI, XLII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Apan, Hidalgo (SUTSMAH)",
                        "aplica": "I, II, III, XIII, XXIX, XXXIV, XXXIX, XLIII, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XIX, XX, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLI, XLII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores y Empleados de la UAEH",
                        "aplica": "I, II, III, VII, VIII, IX, XIII, XVI, XVII, XVIII, XIX, XX, XXIII, XXIX, XXX, XXXIV, XXXV, XXXIX, XLI, XLII, XLIII, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, X, XI, XII, XIV, XV, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXXI, XXXII, XXXIII, XXXVI, XXXVII, XXXVIII, XL, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Atotonilco el Grande, Hidalgo",
                        "aplica": "I, II, III, IX, XIII, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Emiliano Zapata, Hgo.",
                        "aplica": "I, II, III, IX, XIII, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Mineral del Monte, Hidalgo.",
                        "aplica": "I, II, III, IX, XIII, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Pachuca de Soto, Hgo.",
                        "aplica": "I, II, III, V, VII, IX, XIII, XIX, XX, XXIX, XXX, XXXIII, XXXIV, XXXVI, XXXIX, XLIII, XLV, XLVIII, UP",
                        "noaplica": "IV, VI, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXIII, XXIV, XXV, XXVI, XXVII, XXVIII, XXXI, XXXII, XXXV, XXXVII, XXXVIII, XL, XLI, XLII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Progreso, Hidalgo",
                        "aplica": "I, II, III, V, VII, IX, XIII, XIX, XX, XXIX, XXX, XXXIII, XXXIV, XXXVI, XXXIX, XLIII, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Lealtad, Fuerza y Perseverancia de los Trabajadores al Servicio del Municipio de Tlaxcoapan, Hidalgo",
                        "aplica": "I, II, III, XIII, XVI, XIX, XX, XXIII, XXIX, XXXIV, XXXIX, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLI, XLII, XLIII, XLIV, XLVI, XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Almoloya, Hidalgo",
                        "aplica": "I, II, III, IX, XIII, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Tlanchinol, Hidalgo",
                        "aplica": "I, II, III, VII, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Tizayuca, Hidalgo",
                        "aplica": "I, II, III, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio Tulancingo, Hidalgo",
                        "aplica": "I, II, III, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio Tlanalapa, Hidalgo",
                        "aplica": "I, II, III, IX, XIII, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VII, VIII, X, XI, XII, XIV, XV, XVI, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Huautla, Hidalgo",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXV, XXVI, XXVIII, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLII, XLIII, XLIV, XLVI y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Mineral de la Reforma",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Omitlán de Juárez, Hidalgo",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Cuautepec de Hinojosa , Hgo. SUTSHAMCHH",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Huasca de Ocampo , Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Tepeapulco, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII,UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Actopan, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Ayuntamiento del Municipio de Atitalaquia, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de El Cardonal, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Ayuntamiento del Municipio de Huichapan, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Ixmiquilpan, Hgo.  (STSMIH)",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Mixquiahuala, Hgo. SUTSHAMJH",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Comisión Ejecutiva Única de Trabajadores al Servicio del Municipio de Santiago de Anaya, Hidalgo",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento  del Municipio de Tecozautla, Hgo. (FESMUCOPEH)",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento de Tula de Allende, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Zimapan, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del H. Ayuntamiento del Municipio de Atlapexco, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Huejutla de Reyes, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    },
                    {
                        "mun": "Sindicato Único de Trabajadores al Servicio del Municipio de Molango de Escamilla, Hgo.",
                        "aplica": "I, II, III, VII, IX, XIII, XVI, XIX, XX, XXIII, XXIV, XXVII, XXIX, XXX, XXXIV, XXXIX, XLI, XLV, XLVIII, UP",
                        "noaplica": "IV, V, VI, VIII, IX, X, XI, XII, XIV, XV, XVII, XVIII, XXI, XXII, XXIV, XXV, XXVI, XXVII, XXVIII, XXX, XXXI, XXXII, XXXIII, XXXV, XXXVI, XXXVII, XXXVIII, XL, XLIV y XLVII",
                        "Espec": "Artículos 77 y 78"
                    }

            ];
 
            $('#tableTA').bootstrapTable({
                //Assigning data to table
                data: jsondata
            });
        }).on('shown.bs.tab');