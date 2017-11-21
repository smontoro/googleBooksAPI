function bookSearch() {
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {

			var results = document.getElementById("results")
			for(i=0; i < data.items.length; i++) {
				results.innerHTML += '<h2>' + data.items[i].volumeInfo.title + '</h2>' + '<h3>' + data.items[i].volumeInfo.authors + '</h3>' + data.items[i].volumeInfo.maturityRating
			}
		},

		type: "GET"
	})
}

document.getElementById("searchBtn").addEventListener('click', bookSearch, false)
