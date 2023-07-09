var snp_id=0;
var samples = header.getSampleNamesInOrder();
out.print("id");
for(var i=0;i< samples.size();++i)
    {
    out.print("\t"+samples.get(i));
    }
out.println();

while(iter.hasNext()) {
var ctx= iter.next();
++snp_id;
out.print( ctx.hasID()?ctx.getID():".");
for(var i=0;i< samples.size();++i)
    {
    out.print("\t");
    var g= ctx.getGenotype(samples.get(i));
    if(g.isHomRef())
        {
        out.print("0");
        }
    else if(g.isHet())
        {
        out.print("1");
        }
    else if(g.isHomVar())
        {
        out.print("2");
        }
    else 
        {
        out.print("-1");
        }
    }

  out.println();
 }
