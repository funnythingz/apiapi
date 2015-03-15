module Api
  module V1

    class EntriesController < ApplicationController
      def index
        @entries = Entry.all
        render json: @entries
      end

      def show
        @entry = Entry.find_by(id: params[:id])
      end

      def create
        @entry = Entry.new(entry_params)

        if @entry.save
          render :show, status: :created, location: @entry
        else
          render json: @entry.errors, status: :unprocessable_entity
        end
      end

      private

      def entry_params
        params.require(:entries).permit(:title, :content)
      end
    end

  end
end
