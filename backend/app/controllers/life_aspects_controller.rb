class LifeAspectsController < ApplicationController

  def index
    life_aspects = LifeAspect.all 

    render json: life_aspects, status: 200
  end

  def show 
    life_aspect = LifeAspect.find(params[:id])

    render json: life_aspect, status: 200
  end

  def create
    life_aspect = LifeAspect.new(life_aspect_params)
    
    life_aspect.save 
    render json: life_aspect, status: 200
  
  end

  def update 
    life_aspect = LifeAspect.find(params[:id])
    life_aspect.update(life_aspect_params)
    render json: @ife_aspect, status: 200
  end

  def destroy 
    life_aspect = LifeAspect.find(params[:id])
    life_aspect.delete
    render json: {life_aspectId: life_aspect.id}
  end

  private 

  def life_aspect_params
    params.require(:lifeAspect).permit(:name)

  end

end