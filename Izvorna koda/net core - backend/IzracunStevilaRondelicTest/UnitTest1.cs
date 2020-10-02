using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using IzracunStevilaRondelic;

namespace IzracunStevilaRondelicTest
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void IzračunRondelicePloscine_ReturnTrue()
        {
            // Tests that we expect to return true.
            int sirina = 20;
            int dolzina = 30;
            int predvidevanja = 600;
            //act 
            int ploscina = IzracunStevilaRondelic.Rondelica.CelotnaPloscinaTrak(sirina, dolzina);

            //assert
            Assert.AreEqual(predvidevanja, ploscina);
        }


        [TestMethod]
        public void IzracunStevilaRondelic_ReturnTrue()
        {
            int dolzinaTraka = 400;
            int sirinaTraka = 150;
            int polmerRondelice = 30;
            int razdaljaMedRondelicama = 10;
            int zgornjiInSpodnjiRob = 15;
            int zacetekInKonecRoba = 30;

            int izracun = IzracunStevilaRondelic.Rondelica.IzracunRondelice(
                sirinaTraka, dolzinaTraka, polmerRondelice, razdaljaMedRondelicama, zgornjiInSpodnjiRob, zacetekInKonecRoba);
            int shouldBe = 28;

            //assert
            Assert.AreEqual(shouldBe, izracun);
        }


        [TestMethod]
        public void PrevelikPremerRondelice_ReturnTrue()
        {
            int sirinaTraka = 300;
            int polmerRondelice = 200;
            int zgornjiInSpodnjiRob = 60;

            int naVoljoDolzine = sirinaTraka - (zgornjiInSpodnjiRob * 2);
            int premer = polmerRondelice * 2;

            //assert
            Assert.IsTrue(premer > naVoljoDolzine);
        }

        [TestMethod]
        public void PrevelikPremerRondelice_ReturnFalse()
        {
            int sirinaTraka = 300;
            int polmerRondelice = 70;
            int zgornjiInSpodnjiRob = 60;

            int naVoljoDolzine = sirinaTraka - (zgornjiInSpodnjiRob * 2);
            int premer = polmerRondelice * 2;

            //assert
            Assert.IsTrue(naVoljoDolzine > premer);
        }


    }
}
