class PagesController < ApplicationController

  def index
    # rails magic. by defualt rails will look for views/pages/index.html.erb
    # and render that

    puts "index method in pages controller called"
    #use my model
    pages = Page.all

    # use react here, pass pages from controller to my react component via 'props'
    render component: "Pages", props:{pages: pages}
  end
end
