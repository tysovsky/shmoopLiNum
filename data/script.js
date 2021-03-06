$(function(){
    //Passage is inside a div with 'sat_passage' class
    var passage = $('.sat_passage');

    if(passage.length)
    {
	
	//Paragraph containing actuall passage is always the first child of the divider
	var paragraph = passage.first('p');
	//Get the html markup of the passage
	var phtml = paragraph.html();

	var index = 0;
	var linum = 1;
	
	
	//Loop through every line break/paragraph in the passage  and insert number after it
	while (index != -1){

	    index_b = phtml.indexOf('<br>', index + 5);
	    index_p = phtml.indexOf('<p>', index +4);

	    if(index_b < index_p){
		index = index_b

		if(index != -1)
		{
		    phtml = phtml.substr(0, index+4) + linum + ' &nbsp; ' + phtml.substr(index+4);
		    linum++;
		}
	    }
	    else{
		index = index_p

		if(index != -1)
		{
		    phtml = phtml.substr(0, index+3) + linum + ' &nbsp; ' + phtml.substr(index+3);
		    linum++;
		}
	    }

	    
	}

	//Delete the old paragrapgh
	paragraph.empty();
	//Set the new paragraph
	paragraph.html(phtml);

    }
});
