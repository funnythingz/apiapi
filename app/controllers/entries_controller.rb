class EntriesController < ApplicationController
  def index
    @entries = Entry.all.select(:title, :content).order(created_at: :desc)
  end

  def show
    @id = params[:id]
  end
end
