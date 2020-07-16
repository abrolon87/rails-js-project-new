class CreateLifeAspects < ActiveRecord::Migration[6.0]
  def change
    create_table :life_aspects do |t|
      t.string :name

      t.timestamps
    end
  end
end
