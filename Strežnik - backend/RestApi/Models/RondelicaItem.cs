using System.ComponentModel.DataAnnotations;

public class RondelicaItem
{
	public long Id { get; set; }

	[Required]
	public int DolzinaTraku { get; set; }

	[Required]
	public int SirinaTraku { get; set; }

	[Required]
	public int PolmerRondelic { get; set; }

	[Required]
	public int RazdaljaMedRondelicama { get; set; }

	[Required]
	public int ZgornjiInSpodnjiRob { get; set; }

	[Required]
	public int ZacetekInKonecRob { get; set; }

	public int SteviloOptimalnihRondelic { get; set; }
}