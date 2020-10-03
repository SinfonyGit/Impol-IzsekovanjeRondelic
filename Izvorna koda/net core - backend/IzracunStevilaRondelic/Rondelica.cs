using System;
using System.Diagnostics;

namespace AlgoritemOptimalnegaIzracunaRondelic
{
    public class Rondelica
    {

        public static Tuple<int, string> IzracunRondelice(int sirinaTraka, int dolzinaTraka, int polmerRondelice, 
            int razdaljaMedRondelicama, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            var validacija = AlgoritemRondelicaValidations.ValidacijaAlgoritma(sirinaTraka, dolzinaTraka, polmerRondelice, 
                razdaljaMedRondelicama, zgornjiInSpodnjiRob, zacetekInKonecRoba);

            if (validacija.Item1 == false)
            {
                return new Tuple<int, string>(-999, validacija.Item2);
            } else
            {
                int obdelovalnaPovrsina = DejanskaObdelovalnaPovrsina(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
                return new Tuple<int, string>(IzracunSteviloRondelic(obdelovalnaPovrsina, polmerRondelice, razdaljaMedRondelicama), "");
            }
            
        }

        public static int CelotnaPloscinaTrak(int sirinaTraka, int dolzinaTraka)
        {
            int ploscina = sirinaTraka * dolzinaTraka;
            return ploscina;
        }

        private static int PloscinaRobov(int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int ploscinaZgornjiInSpodnjiRob = 2 * (zgornjiInSpodnjiRob * dolzinaTraka);
            int sirinaTrakaBrezZgornjegaInSpodnjegaRoba = sirinaTraka - (2 * zgornjiInSpodnjiRob);
            int ploscinaZacetekInKonecRob = 2 * (sirinaTrakaBrezZgornjegaInSpodnjegaRoba * zacetekInKonecRoba);
            int ploscinaRobov = ploscinaZgornjiInSpodnjiRob + ploscinaZacetekInKonecRob;
            return ploscinaRobov;
        }

        private static int DejanskaObdelovalnaPovrsina(int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int obdelovalnaPovrsina = CelotnaPloscinaTrak(sirinaTraka, dolzinaTraka) - PloscinaRobov(sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            return obdelovalnaPovrsina;
        }

        private static int IzracunSteviloRondelic(int obdelovalnaPovrsina, int polmerRondelice, int razdaljaMedRondelicama)
        {
            int straniRondelice = polmerRondelice + (razdaljaMedRondelicama / 2);
            int kvadratRondelica = straniRondelice * straniRondelice;
            int steviloRondelic = obdelovalnaPovrsina / kvadratRondelica;
            return steviloRondelic;
        }
    }
}
