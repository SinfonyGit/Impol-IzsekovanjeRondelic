using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Text;

namespace AlgoritemOptimalnegaIzracunaRondelic
{
    class AlgoritemRondelicaValidations
    {
        // Če je so podatki za algoritem ustrezni, jih označimo za "VALID" oz "TRUE"
        public static Tuple<Boolean, string> ValidacijaAlgoritma (int sirinaTraka, int dolzinaTraka, int polmerRondelice, int razdaljaMedRondelicama, 
            int zgornjiInSpodnjiRob, int zacetekInKonecRoba)
        {
            int premerRondelic = polmerRondelice * 2;
            int delovnaDolzinaTraku = (dolzinaTraka - (zacetekInKonecRoba * 2));
            int delovnaSirinaTraku = (sirinaTraka - (zgornjiInSpodnjiRob * 2));

            // Vnosno polje v tem algoritme ne more biti 0
            if (sirinaTraka == 0 || dolzinaTraka == 0 || polmerRondelice == 0 || 
                razdaljaMedRondelicama == 0 || zgornjiInSpodnjiRob == 0 || zacetekInKonecRoba == 0)
            {
                return new Tuple<bool, string>(false, "Polje ne sme biti 0!");
            }

            if (premerRondelic > delovnaDolzinaTraku && (delovnaDolzinaTraku > 0))
            {
                return new Tuple<bool, string>(false, "Obdelovalna dolžina traku("+delovnaDolzinaTraku+"mm) je premajhna na premer rondelice(" + premerRondelic + "mm). " +
                    "Povečajte dolžino traku ali pa zmanjšajte začetek in konec roba traku.");
            }

            if (premerRondelic > delovnaSirinaTraku && (delovnaSirinaTraku > 0))
            {
                return new Tuple<bool, string>(false, "Obdelovalna širina traku(" + delovnaSirinaTraku + "mm) je premajhna na premer rondelice(" + premerRondelic + "mm). " +
                     "Povečajte širino traku ali pa zmanjšajte zgornji in spodnji rob traku.");
            }

            if ((zgornjiInSpodnjiRob * 2) > (sirinaTraka - premerRondelic))
            {
                return new Tuple<bool, string>(false, "Zgornji in spodnji rob traku je večji od širine traku in premera rondelice! Povečajte širino traku " +
                    "ali pa zmanjšajte zgornji in spodnji rob traku.");
            }

            if ((zacetekInKonecRoba * 2) > (dolzinaTraka - premerRondelic))
            {
                return new Tuple<bool, string>(false, "Začetek in konec roba traku je večji od dolžine traku in premera rondelice! Povečajte dolžino traku " +
                    "ali pa zmanjšajte začetek in konec roba traku.");
            }

            if (razdaljaMedRondelicama > (delovnaDolzinaTraku - premerRondelic))
            {
                return new Tuple<bool, string>(false, "Razdalja med rondelicama je prevelika na dolžino traku.");
            }
            if (razdaljaMedRondelicama > (delovnaSirinaTraku - premerRondelic))
            {
                Trace.WriteLine(delovnaSirinaTraku);
                return new Tuple<bool, string>(false, "Razdalja med rondelicama je prevelika na širino traku.");
            }

            else
            {
                return new Tuple<bool, string>(true, "valid");
            }


        }

    }
}
