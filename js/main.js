function bookSearch() {
	var search = document.getElementById("search").value

	$.ajax({
		url:"https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {

			var results = document.getElementById("results")
			for(i=0; i < data.items.length; i++) {
				//store the data in variables
				var photo = data.items[i].volumeInfo.imageLinks.thumbnail
				var title = data.items[i].volumeInfo.title
				var authors = data.items[i].volumeInfo.authors
				var pubDate = data.items[i].volumeInfo.publishedDate 
				var link = data.items[i].saleInfo.buyLink

				//store HTML elements in variables
				var photoImg = document.createElement("img")
					photoImg.setAttribute("src", photo)
				var titleH1 = document.createElement("h1")
				var authorsH2 = document.createElement("h2")
				var pubDateH3 = document.createElement("h3")
				var button = document.createElement("button")
					button.innerHTML = "Purchase Book"
					button.setAttribute("style", "display: block; margin: 0 auto 50px auto;")
				var linkA = document.createElement("a")
					linkA.setAttribute("href", link)
					linkA.appendChild(button)
					linkA.setAttribute("target", "_blank")
				

				//append data variables to HTML variables
				photoImg.innerHTML= photo
				titleH1.innerHTML = title
				authorsH2.innerHTML= authors
				pubDateH3.innerHTML = pubDate

				//append HTML variables to DOM
				var results = document.getElementById("results")

				results.innerHTML += photoImg.outerHTML + titleH1.outerHTML + authorsH2.outerHTML + pubDateH3.outerHTML + linkA.outerHTML;		

			}
		},

		type: "GET"
	})
}

document.getElementById("searchBtn").addEventListener('click', bookSearch, false)
