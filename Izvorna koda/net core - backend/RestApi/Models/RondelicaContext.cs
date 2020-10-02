using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace RestApi.Models
{
    public class RondelicaContext : DbContext
    {
        public RondelicaContext(DbContextOptions<RondelicaContext> options)
            : base(options)
        {
        }

        public DbSet<RondelicaItem> RondelicaItems { get; set; }
    }
}
