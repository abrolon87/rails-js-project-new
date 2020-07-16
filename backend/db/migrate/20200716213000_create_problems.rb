class CreateProblems < ActiveRecord::Migration[6.0]
  def change
    create_table :problems do |t|
      t.text :body 
      t.date :date 
      t.belongs_to :life_aspect

      t.timestamps
    end
  end
end
