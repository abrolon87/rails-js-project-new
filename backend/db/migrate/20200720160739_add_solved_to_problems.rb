class AddSolvedToProblems < ActiveRecord::Migration[6.0]
  def change
    add_column :problems, :solved?, :boolean, :default => false
  end
end
