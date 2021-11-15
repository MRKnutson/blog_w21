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

  def new
    render component: "PageNew"
  end

  def create
    # params are defined in every method in controller
    Page.create(title: params[:page][:title], author: params[:page][:author])
    # want to go back to pages index '/pages'
    # this really  does get request to '/pages'
    redirect_to pages_path
  end

end
