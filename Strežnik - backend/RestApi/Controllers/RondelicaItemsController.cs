using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RestApi.Models;

namespace RestApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RondelicaItemsController : ControllerBase
    {
        private readonly RondelicaContext _context;

        public RondelicaItemsController(RondelicaContext context)
        {
            _context = context;
        }

        // GET: api/RondelicaItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RondelicaItem>>> GetRondelicaItems()
        {
            return await _context.RondelicaItems.ToListAsync();
        }

        // GET: api/RondelicaItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RondelicaItem>> GetRondelicaItem(long id)
        {
            var rondelicaItem = await _context.RondelicaItems.FindAsync(id);

            if (rondelicaItem == null)
            {
                return NotFound();
            }

            return rondelicaItem;
        }

        // PUT: api/RondelicaItems/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRondelicaItem(long id, RondelicaItem rondelicaItem)
        {
            if (id != rondelicaItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(rondelicaItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RondelicaItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RondelicaItems
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<RondelicaItem>> PostRondelicaItem(RondelicaItem rondelicaItem)
        {

            //return CreatedAtAction("GetRondelicaItem", new { id = rondelicaItem.Id }, rondelicaItem);
            // return CreatedAtAction(nameof(GetRondelicaItem), new { id = rondelicaItem.Id }, rondelicaItem);


            rondelicaItem.SteviloOptimalnihRondelic = AlgoritemOptimalnegaIzracunaRondelic.Rondelica.IzracunRondelice(
                rondelicaItem.SirinaTraku, rondelicaItem.DolzinaTraku, rondelicaItem.PolmerRondelic, rondelicaItem.RazdaljaMedRondelicama, rondelicaItem.ZgornjiInSpodnjiRob, rondelicaItem.ZacetekInKonecRob);

            _context.RondelicaItems.Add(rondelicaItem);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetRondelicaItem), new { id = rondelicaItem.Id, }, rondelicaItem);
        }

        // DELETE: api/RondelicaItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RondelicaItem>> DeleteRondelicaItem(long id)
        {
            var rondelicaItem = await _context.RondelicaItems.FindAsync(id);
            if (rondelicaItem == null)
            {
                return NotFound();
            }

            _context.RondelicaItems.Remove(rondelicaItem);
            await _context.SaveChangesAsync();

            return rondelicaItem;
        }

        private bool RondelicaItemExists(long id)
        {
            return _context.RondelicaItems.Any(e => e.Id == id);
        }
    }
}
