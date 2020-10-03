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
                return new Tuple<int, string>(izracunSteviloRondelic( sirinaTraka, dolzinaTraka, zgornjiInSpodnjiRob, zacetekInKonecRoba,
                    polmerRondelice, razdaljaMedRondelicama), "");
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

        private static int izracunSteviloRondelic(
            int sirinaTraka, int dolzinaTraka, int zgornjiInSpodnjiRob, 
            int zacetekInKonecRoba, int polmerRondelice, int razdaljaMedRondelicama)
        {
            int notranjaDolzina = dolzinaTraka - (zacetekInKonecRoba * 2);
            int notranjaSirina = sirinaTraka - (zgornjiInSpodnjiRob * 2);

            int stranicaRondelice = polmerRondelice + (razdaljaMedRondelicama);
            int steviloRondelicVVrstici = (int)(notranjaDolzina / stranicaRondelice);
            int steviloRondelicVStolpcu = (int)(notranjaSirina / stranicaRondelice);

            int steviloRondelic = steviloRondelicVVrstici * steviloRondelicVStolpcu;

            Trace.WriteLine("Notranja Dolžina: " + notranjaDolzina);
            Trace.WriteLine("Notranja Širina: " + notranjaSirina);
            Trace.WriteLine("Stranica rondelice: " + stranicaRondelice);

            Trace.WriteLine("Vrstica: " + steviloRondelicVVrstici);
            Trace.WriteLine("Stolpec: " + steviloRondelicVStolpcu);
            Trace.WriteLine("Stevilo rondelic: " + steviloRondelic);

            return steviloRondelic;
        }
    }
}
