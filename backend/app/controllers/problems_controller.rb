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
    life_aspect = LifeAspect.find(params[:life_aspect_id])
    problem = life_aspect.problems.build(problem_params) 
    #{body = Faker::body = Faker::Coffee.blend_name
    # date = Faker::Date.between(from: 5.days.ago, to: Date.today)}
    
    if problem.save 
      render json: problem, status: 200
    else  
      render json: {message: problem.errors.messages}
    end
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
    params.require(:problem).permit(:body, :date, :life_aspect_id)
  end

end
