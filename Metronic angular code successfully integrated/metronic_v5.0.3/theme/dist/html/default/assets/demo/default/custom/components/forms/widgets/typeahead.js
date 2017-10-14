var Typeahead=function(){var e=["Alabama","Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","Iowa","Kansas","Kentucky","Louisiana","Maine","Maryland","Massachusetts","Michigan","Minnesota","Mississippi","Missouri","Montana","Nebraska","Nevada","New Hampshire","New Jersey","New Mexico","New York","North Carolina","North Dakota","Ohio","Oklahoma","Oregon","Pennsylvania","Rhode Island","South Carolina","South Dakota","Tennessee","Texas","Utah","Vermont","Virginia","Washington","West Virginia","Wisconsin","Wyoming"],a=function(){$("#m_typeahead_1, #m_typeahead_1_modal, #m_typeahead_1_validate, #m_typeahead_2_validate, #m_typeahead_3_validate").typeahead({hint:!0,highlight:!0,minLength:1},{name:"states",source:function(e){return function(a,n){var o;o=[],substrRegex=new RegExp(a,"i"),$.each(e,function(e,a){substrRegex.test(a)&&o.push(a)}),n(o)}}(e)})},n=function(){var a=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,local:e});$("#m_typeahead_2, #m_typeahead_2_modal").typeahead({hint:!0,highlight:!0,minLength:1},{name:"states",source:a})},o=function(){var e=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.whitespace,queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:"http://localhost/metronic_v5.0.3/theme/dist/angular/default/src/assets/inc/api/typeahead/countries.json"});$("#m_typeahead_3, #m_typeahead_3_modal").typeahead(null,{name:"countries",source:e})},t=function(){var e=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("value"),queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:"http://localhost/metronic_v5.0.3/theme/dist/angular/default/src/assets/inc/api/typeahead/movies.json"});$("#m_typeahead_4").typeahead(null,{name:"best-pictures",display:"value",source:e,templates:{empty:['<div class="empty-message" style="padding: 10px 15px; text-align: center;">',"unable to find any Best Picture winners that match the current query","</div>"].join("\n"),suggestion:Handlebars.compile("<div><strong>{{value}}</strong> – {{year}}</div>")}})},i=function(){var e=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("team"),queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:"http://localhost/metronic_v5.0.3/theme/dist/angular/default/src/assets/inc/api/typeahead/nba.json"}),a=new Bloodhound({datumTokenizer:Bloodhound.tokenizers.obj.whitespace("team"),queryTokenizer:Bloodhound.tokenizers.whitespace,prefetch:"http://localhost/metronic_v5.0.3/theme/dist/angular/default/src/assets/inc/api/typeahead/nhl.json"});$("#m_typeahead_5").typeahead({highlight:!0},{name:"nba-teams",display:"team",source:e,templates:{header:'<h3 class="league-name" style="padding: 5px 15px; font-size: 1.2rem; margin:0;">NBA Teams</h3>'}},{name:"nhl-teams",display:"team",source:a,templates:{header:'<h3 class="league-name" style="padding: 5px 15px; font-size: 1.2rem; margin:0;">NHL Teams</h3>'}})};return{init:function(){a(),n(),o(),t(),i()}}}();jQuery(document).ready(function(){Typeahead.init()});