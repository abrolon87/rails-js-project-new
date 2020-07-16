class ProblemsController < ApplicationController
  
  def index
    problems = Problem.all 

    render json: problems, status: 200
  end

  def show 
    problem = Problem.find(params[:id])

    render json: problem, status: 200
  end

  def create
    problem = Problem.new(problem_params)
    
    problem.save 
    render json: problem, status: 200
  
  end

  def update 
    problem = Problem.find(params[:id])
    problem.update(problem_params)
    render json: problem, status: 200
  end

  def destroy 
    problem = Problem.find(params[:id])
    problem.destroy
    render json: {problemId: problem.id}
  end

  private 

  def problem_params
    params.require(:problem).permit(:body, :life_aspect_id)
  end

end
