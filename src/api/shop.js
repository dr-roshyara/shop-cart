const __products ={
    heber: [
        {
          id:1,
          name: 'Einstufig Heber',
          inventory:10,
          preis: 34510.20,
          stars:5,
          totalReviews: 1,        
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/heber/heber_a_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
          
          // image: "../assets/images/aggregatCompact.jpg"
  
        },
        {
          id:2,
          name: 'Mehrstufig Heber',
          inventory:10,
          preis: 3520.10,
          stars:4,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/heber/heber_b_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        }
  
      ],
      aggregat: [
        {
          id:3,
          name: 'Aggregat mit mechanischem Ventil',
          inventory:10,
          preis: 6100.30,
          stars:5,
          totalReviews:0,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aggregate/aggregat_a_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:4,
          name: 'Aggregat mit geregeltem Ventil',
          inventory:10,
          preis: 4800.30,
          stars:4,
          totalReviews:0,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aggregate/aggregat_b_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:5,
          name: 'Aggregat mit frequenzgeregeltem Ventil',
          inventory:10,
          preis: 7620.30,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aggregate/aggregat_c_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },{
          id:6,
          name: "Kompaktaggregrat",
          inventory:10,
          preis: 7020.30,
          stars:5,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aggregate/aggregat_d_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:7,
          name: "Aggregat mit Aufsetzschrank",
          inventory:10,
          preis: 1520.30,
          stars:5,
          totalReviews: 5,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aggregate/aggregat_e_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        }
  
      ],
      AufzugZubehoer: [
        {
          id:8,
          name: "Electro-mechanische Stützriegel",
          inventory:10,
          preis: 1920.40,
          stars:5,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aufzug-zubehoer/aufzug_zub_a_01_gr.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:9,
          name: "Hydraulische Verriegelung",
          inventory:10,
          preis: 2420.10,
          stars:5,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aufzug-zubehoer/aufzug_zub_b_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:10,
          name: "Magnetbetätigtes Absperrventil",
          inventory:10,
          preis: 4420.90,
          stars:5,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aufzug-zubehoer/aufzug_zub_c_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:11,
          name: "Teleskopschürze",
          inventory:10,
          preis: 2420.20, 
          stars:3,
          totalReviews: 1,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/aufzug-zubehoer/aufzug_zub_d_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        {
          id:12,
          name: "Leitungsbruchventil",
          inventory:10,
          preis: 1524.20, 
          stars:4,
          totalReviews: 4,
          image: 'http://www.algi-lift.de/fileadmin/media/products/aufzugs-komponenten/leitungsbruchventile/leitungsbruchventil_a_01_kl.jpg',
          details:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quod ut dolorem corporis laudantium delectus velit. Sed, exercitationem autem quo quasi molestias id possimus voluptatibus harum dolore pariatur a atque."
  
        },
        
        
  
      ],
}
export default {
    getProducts(cb){
        setTimeout(()=>cb(__products),100);
    }
}